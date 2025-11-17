// DOKU Payment Webhook Handler
// Endpoint: /functions/v1/payments/doku-webhook

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { createHmac } from 'https://deno.land/std@0.168.0/node/crypto.ts';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface DOKUWebhook {
  order: {
    invoice_number: string;
    amount: number;
  };
  transaction: {
    status: string;
    date: string;
  };
  virtual_account_info?: {
    virtual_account_number: string;
  };
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    // Parse webhook payload
    const payload: DOKUWebhook = await req.json();

    // Verify webhook signature (DOKU sends signature in header)
    const signature = req.headers.get('Signature');
    const dokuSecretKey = Deno.env.get('DOKU_SECRET_KEY') ?? '';
    
    if (signature && dokuSecretKey) {
      const calculatedSignature = createHmac('sha256', dokuSecretKey)
        .update(JSON.stringify(payload))
        .digest('hex');
      
      if (signature !== calculatedSignature) {
        throw new Error('Invalid webhook signature');
      }
    }

    // Create Supabase admin client
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_KEY') ?? '' // Use service key for admin operations
    );

    // Find transaction by invoice number
    const { data: transaction, error: findError } = await supabaseClient
      .from('marketplace_transactions')
      .select('*, marketplace_products!inner(seller_id, commission_rate)')
      .eq('payment_id', payload.order.invoice_number)
      .single();

    if (findError || !transaction) {
      throw new Error('Transaction not found');
    }

    // Update transaction status based on DOKU webhook
    let paymentStatus: 'pending' | 'completed' | 'failed' | 'refunded' = 'pending';
    
    switch (payload.transaction.status.toUpperCase()) {
      case 'SUCCESS':
      case 'SETTLEMENT':
        paymentStatus = 'completed';
        break;
      case 'FAILED':
      case 'EXPIRED':
        paymentStatus = 'failed';
        break;
      case 'REFUNDED':
        paymentStatus = 'refunded';
        break;
    }

    // Update transaction
    const { error: updateError } = await supabaseClient
      .from('marketplace_transactions')
      .update({
        payment_status: paymentStatus,
        completed_at: paymentStatus === 'completed' ? new Date().toISOString() : null,
        metadata: {
          ...transaction.metadata,
          doku_webhook: payload,
          updated_at: new Date().toISOString(),
        },
      })
      .eq('id', transaction.id);

    if (updateError) {
      throw updateError;
    }

    // If payment completed, update product sales and revenue
    if (paymentStatus === 'completed') {
      // Update product sales count and revenue
      await supabaseClient.rpc('increment_product_sales', {
        product_id: transaction.product_id,
        amount: transaction.amount,
      });

      // Update seller's revenue
      await supabaseClient.rpc('update_seller_revenue', {
        seller_id: transaction.marketplace_products.seller_id,
        amount: transaction.seller_payout,
      });

      // Send notification to buyer and seller (implement as needed)
      console.log('Payment completed for transaction:', transaction.id);
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Webhook processed successfully',
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  } catch (error) {
    console.error('Webhook error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message,
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      }
    );
  }
});
