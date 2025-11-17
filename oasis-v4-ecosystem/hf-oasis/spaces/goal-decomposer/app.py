"""
OASIS V4 - Goal Decomposition AI
HuggingFace Space for decomposing business goals into actionable tasks
"""

import gradio as gr
from transformers import pipeline
import json

# Initialize text generation pipeline
generator = pipeline('text-generation', model='gpt2')

def decompose_goal(goal_title, goal_description, target_revenue):
    """
    Decompose a business goal into actionable tasks using AI
    """
    try:
        # Create structured prompt
        prompt = f"""
Business Goal Decomposition:

Title: {goal_title}
Description: {goal_description}
Target Revenue: ${target_revenue}

Break this goal into 5 specific, actionable tasks:

1. Task:
   Priority: high/medium/low
   Estimated Time: X hours
   Description:

2. Task:
"""
        
        # Generate tasks
        result = generator(
            prompt,
            max_length=400,
            temperature=0.7,
            top_p=0.9,
            num_return_sequences=1
        )
        
        generated_text = result[0]['generated_text']
        
        # Parse and structure output
        tasks = parse_tasks(generated_text)
        
        return format_output(tasks)
        
    except Exception as e:
        return f"Error: {str(e)}"

def parse_tasks(text):
    """
    Parse generated text into structured tasks
    """
    # Simple parsing logic (enhance in production)
    lines = text.split('\n')
    tasks = []
    
    current_task = {}
    for line in lines:
        line = line.strip()
        if line.startswith(('1.', '2.', '3.', '4.', '5.')):
            if current_task:
                tasks.append(current_task)
            current_task = {'title': line}
        elif 'Priority:' in line:
            current_task['priority'] = line.split(':')[1].strip()
        elif 'Estimated Time:' in line:
            current_task['time'] = line.split(':')[1].strip()
        elif 'Description:' in line:
            current_task['description'] = line.split(':')[1].strip()
    
    if current_task:
        tasks.append(current_task)
    
    return tasks

def format_output(tasks):
    """
    Format tasks as readable output
    """
    if not tasks:
        return "No tasks generated. Please try again with more detailed input."
    
    output = "### Generated Action Plan\n\n"
    for i, task in enumerate(tasks, 1):
        output += f"**Task {i}:** {task.get('title', 'Untitled')}\n"
        output += f"- **Priority:** {task.get('priority', 'medium')}\n"
        output += f"- **Time:** {task.get('time', 'TBD')}\n"
        output += f"- **Description:** {task.get('description', 'N/A')}\n\n"
    
    return output

# Create Gradio interface
with gr.Blocks(title="OASIS V4 - Goal Decomposer AI", theme=gr.themes.Soft()) as demo:
    gr.Markdown("""
    # 🎯 OASIS V4 - Goal Decomposition AI
    
    Transform your business goals into actionable tasks using AI.
    """)
    
    with gr.Row():
        with gr.Column():
            goal_title = gr.Textbox(
                label="Goal Title",
                placeholder="e.g., Launch Digital Product Marketplace",
                lines=1
            )
            goal_description = gr.Textbox(
                label="Goal Description",
                placeholder="Describe your goal in detail...",
                lines=4
            )
            target_revenue = gr.Number(
                label="Target Revenue ($)",
                value=10000,
                minimum=0
            )
            submit_btn = gr.Button("Generate Action Plan", variant="primary")
        
        with gr.Column():
            output = gr.Markdown(label="Generated Tasks")
    
    submit_btn.click(
        fn=decompose_goal,
        inputs=[goal_title, goal_description, target_revenue],
        outputs=output
    )
    
    gr.Markdown("""
    ---
    **Powered by OASIS V4 Superintelligence Ecosystem**
    
    This AI tool is part of the DACOO (Digital Asset Creation & Optimization Operation) module.
    """)

# Launch app
if __name__ == "__main__":
    demo.launch()
