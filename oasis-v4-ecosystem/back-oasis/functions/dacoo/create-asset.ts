// DACOO - Create Digital Asset Edge Function
// Endpoint: /functions/v1/dacoo/create-asset

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface CreateAssetRequest {
  type: 'course' | 'template' | 'ebook' | 'tool' | 'service' | 'other';
  title: string;
  description?: string;
  content?: string;
  price: number;
  category?: string;
  tags?: string[];
  use_ai?: boolean; // Whether to use AI for content generation
  ai_prompt?: string; // Prompt for AI content generation
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      throw new Error('Missing authorization header');
    }

    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      {
        global: {
          headers: { Authorization: authHeader },
        },
      }
    );

    const {
      data: { user },
      error: userError,
    } = await supabaseClient.auth.getUser();

    if (userError || !user) {
      throw new Error('Unauthorized');
    }

    const body: CreateAssetRequest = await req.json();

    // Validate required fields
    if (!body.title || !body.type || body.price === undefined) {
      throw new Error('Title, type, and price are required');
    }

    let finalContent = body.content || '';
    let createdBy: 'ai' | 'human' | 'hybrid' = 'human';

    // Use AI to generate content if requested
    if (body.use_ai && body.ai_prompt) {
      const hfToken = Deno.env.get('HF_API_TOKEN');
      if (hfToken) {
        try {
          const contentResponse = await fetch(
            'https://api-inference.huggingface.co/models/gpt2',
            {
              method: 'POST',
              headers: {
                Authorization: `Bearer ${hfToken}`,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                inputs: `Create comprehensive ${body.type} content:\n\nTitle: ${body.title}\n\nRequirements: ${body.ai_prompt}\n\nGenerate detailed content outline with key features, learning outcomes, and benefits:`,
                parameters: {
                  max_length: 500,
                  temperature: 0.8,
                },
              }),
            }
          );

          if (contentResponse.ok) {
            const aiContent = await contentResponse.json();
            finalContent = body.content 
              ? `${body.content}\n\n--- AI-Generated Content ---\n\n${aiContent[0]?.generated_text || ''}`
              : aiContent[0]?.generated_text || '';
            createdBy = body.content ? 'hybrid' : 'ai';
          }
        } catch (aiError) {
          console.error('AI content generation error:', aiError);
          // Continue with manual content
        }
      }
    }

    // Insert asset into database
    const { data: asset, error: insertError } = await supabaseClient
      .from('dacoo_assets')
      .insert({
        user_id: user.id,
        type: body.type,
        title: body.title,
        description: body.description,
        content: finalContent,
        price: body.price,
        category: body.category,
        tags: body.tags || [],
        created_by: createdBy,
        is_published: false,
      })
      .select()
      .single();

    if (insertError) {
      throw insertError;
    }

    return new Response(
      JSON.stringify({
        success: true,
        data: asset,
        message: 'Digital asset created successfully',
        ai_used: createdBy !== 'human',
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 201,
      }
    );
  } catch (error) {
    console.error('Error:', error);
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
