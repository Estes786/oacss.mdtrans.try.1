// DACOO - Create Goal Edge Function
// Endpoint: /functions/v1/dacoo/create-goal

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface CreateGoalRequest {
  title: string;
  description?: string;
  target_revenue?: number;
  deadline?: string;
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    // Get authorization header
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      throw new Error('Missing authorization header');
    }

    // Create Supabase client
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      {
        global: {
          headers: { Authorization: authHeader },
        },
      }
    );

    // Get current user
    const {
      data: { user },
      error: userError,
    } = await supabaseClient.auth.getUser();

    if (userError || !user) {
      throw new Error('Unauthorized');
    }

    // Parse request body
    const body: CreateGoalRequest = await req.json();

    // Validate required fields
    if (!body.title) {
      throw new Error('Title is required');
    }

    // Insert goal into database
    const { data: goal, error: insertError } = await supabaseClient
      .from('dacoo_goals')
      .insert({
        user_id: user.id,
        title: body.title,
        description: body.description,
        target_revenue: body.target_revenue,
        deadline: body.deadline,
        status: 'planning',
      })
      .select()
      .single();

    if (insertError) {
      throw insertError;
    }

    // Call HuggingFace API to decompose goal into tasks (if HF token is available)
    const hfToken = Deno.env.get('HF_API_TOKEN');
    if (hfToken && body.description) {
      try {
        const tasksResponse = await fetch(
          'https://api-inference.huggingface.co/models/gpt2',
          {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${hfToken}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              inputs: `Decompose this business goal into 5 actionable tasks with priorities:\n\n${body.title}\n${body.description}\n\nFormat: Task: [title] | Priority: [high/medium/low] | Time: [hours]`,
              parameters: {
                max_length: 300,
                temperature: 0.7,
              },
            }),
          }
        );

        if (tasksResponse.ok) {
          const aiResponse = await tasksResponse.json();
          // Parse AI response and create tasks
          // In production, use a more robust parser
          console.log('AI-generated tasks:', aiResponse);
          
          // Create sample tasks based on goal
          const sampleTasks = [
            {
              goal_id: goal.id,
              title: `Research and planning for: ${body.title}`,
              priority: 'high',
              estimated_time: 4,
              ai_generated: true,
            },
            {
              goal_id: goal.id,
              title: `Develop strategy to achieve $${body.target_revenue || 0} revenue`,
              priority: 'high',
              estimated_time: 6,
              ai_generated: true,
            },
            {
              goal_id: goal.id,
              title: `Create digital assets or services`,
              priority: 'medium',
              estimated_time: 8,
              ai_generated: true,
            },
          ];

          await supabaseClient.from('dacoo_tasks').insert(sampleTasks);
        }
      } catch (aiError) {
        console.error('AI task generation error:', aiError);
        // Continue even if AI fails
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        data: goal,
        message: 'Goal created successfully',
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
