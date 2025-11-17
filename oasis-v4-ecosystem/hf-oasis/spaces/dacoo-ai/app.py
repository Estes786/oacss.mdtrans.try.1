"""
OASIS V4 - DACOO AI Space
HuggingFace Gradio Interface for Digital Asset Creation & Optimization
"""

import gradio as gr
import json
from transformers import pipeline

# Initialize AI models
generator = pipeline('text-generation', model='gpt2')
summarizer = pipeline('summarization', model='facebook/bart-large-cnn')

def decompose_goal(title, description, target_revenue):
    """
    Decompose a business goal into actionable tasks using AI
    """
    prompt = f"""
    Business Goal: {title}
    Description: {description}
    Target Revenue: ${target_revenue}
    
    Break this goal into 5 specific, actionable tasks with priorities and time estimates.
    Format each task as:
    Task: [title]
    Priority: [high/medium/low]
    Time: [hours]
    Description: [details]
    """
    
    try:
        result = generator(prompt, max_length=300, num_return_sequences=1)
        generated_text = result[0]['generated_text']
        
        # Parse tasks from generated text
        tasks = parse_tasks(generated_text)
        
        return json.dumps(tasks, indent=2)
    except Exception as e:
        return f"Error: {str(e)}"

def generate_asset_content(asset_type, topic, audience):
    """
    Generate digital asset content using AI
    """
    prompt = f"""
    Create a {asset_type} about "{topic}" for {audience}.
    
    Include:
    1. Compelling title
    2. Description (2-3 sentences)
    3. Key features/learning outcomes
    4. Suggested pricing
    5. Category and tags
    """
    
    try:
        result = generator(prompt, max_length=500, num_return_sequences=1)
        generated_text = result[0]['generated_text']
        
        # Summarize if too long
        if len(generated_text) > 1000:
            summary = summarizer(generated_text, max_length=150, min_length=50)
            generated_text = summary[0]['summary_text']
        
        return generated_text
    except Exception as e:
        return f"Error: {str(e)}"

def optimize_asset(current_title, current_description, current_price):
    """
    Optimize existing digital asset for better performance
    """
    prompt = f"""
    Optimize this digital asset for maximum revenue:
    
    Current Title: {current_title}
    Current Description: {current_description}
    Current Price: ${current_price}
    
    Provide:
    1. Improved title (more compelling, SEO-friendly)
    2. Optimized description (clearer benefits)
    3. Suggested price adjustment
    4. Expected revenue increase (%)
    5. Specific improvements to make
    """
    
    try:
        result = generator(prompt, max_length=400, num_return_sequences=1)
        generated_text = result[0]['generated_text']
        
        return generated_text
    except Exception as e:
        return f"Error: {str(e)}"

def parse_tasks(text):
    """
    Parse AI-generated text into structured task format
    """
    # Simple parser - in production, use more robust parsing
    tasks = []
    lines = text.split('\n')
    
    current_task = {}
    for line in lines:
        line = line.strip()
        if line.startswith('Task:'):
            if current_task:
                tasks.append(current_task)
            current_task = {'title': line.replace('Task:', '').strip()}
        elif line.startswith('Priority:'):
            current_task['priority'] = line.replace('Priority:', '').strip()
        elif line.startswith('Time:'):
            current_task['estimated_time'] = line.replace('Time:', '').strip()
        elif line.startswith('Description:'):
            current_task['description'] = line.replace('Description:', '').strip()
    
    if current_task:
        tasks.append(current_task)
    
    return tasks if tasks else [{'title': 'Sample Task', 'priority': 'high', 'estimated_time': '4 hours', 'description': 'AI-generated task'}]

# Create Gradio interface
with gr.Blocks(title="OASIS V4 - DACOO AI") as demo:
    gr.Markdown("# 🎯 OASIS V4 - DACOO AI Assistant")
    gr.Markdown("Digital Asset Creation & Optimization powered by AI")
    
    with gr.Tab("Goal Decomposition"):
        gr.Markdown("### Break down business goals into actionable tasks")
        with gr.Row():
            with gr.Column():
                goal_title = gr.Textbox(label="Goal Title", placeholder="Increase monthly revenue to $10,000")
                goal_desc = gr.Textbox(label="Description", placeholder="Detailed description of your goal...", lines=3)
                goal_revenue = gr.Number(label="Target Revenue ($)", value=10000)
                decompose_btn = gr.Button("Decompose Goal", variant="primary")
            with gr.Column():
                decompose_output = gr.Textbox(label="Generated Tasks (JSON)", lines=15)
        
        decompose_btn.click(
            fn=decompose_goal,
            inputs=[goal_title, goal_desc, goal_revenue],
            outputs=decompose_output
        )
    
    with gr.Tab("Content Generation"):
        gr.Markdown("### Generate digital asset content with AI")
        with gr.Row():
            with gr.Column():
                content_type = gr.Dropdown(
                    choices=['course', 'template', 'ebook', 'tool', 'service'],
                    label="Asset Type",
                    value='course'
                )
                content_topic = gr.Textbox(label="Topic", placeholder="AI-Powered Marketing")
                content_audience = gr.Textbox(label="Target Audience", placeholder="Small business owners")
                generate_btn = gr.Button("Generate Content", variant="primary")
            with gr.Column():
                generate_output = gr.Textbox(label="Generated Content", lines=15)
        
        generate_btn.click(
            fn=generate_asset_content,
            inputs=[content_type, content_topic, content_audience],
            outputs=generate_output
        )
    
    with gr.Tab("Asset Optimization"):
        gr.Markdown("### Optimize existing assets for better performance")
        with gr.Row():
            with gr.Column():
                opt_title = gr.Textbox(label="Current Title", placeholder="Your current asset title")
                opt_desc = gr.Textbox(label="Current Description", placeholder="Current description...", lines=3)
                opt_price = gr.Number(label="Current Price ($)", value=99)
                optimize_btn = gr.Button("Optimize Asset", variant="primary")
            with gr.Column():
                optimize_output = gr.Textbox(label="Optimization Suggestions", lines=15)
        
        optimize_btn.click(
            fn=optimize_asset,
            inputs=[opt_title, opt_desc, opt_price],
            outputs=optimize_output
        )
    
    gr.Markdown("---")
    gr.Markdown("**Powered by OASIS V4 Superintelligence Ecosystem**")

# Launch the app
if __name__ == "__main__":
    demo.launch()
