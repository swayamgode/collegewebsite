import os
import time
import httpx
from google import genai

# Setup API Key
os.environ["GOOGLE_API_KEY"] = "AIzaSyAAB9l3qyjX5EY8MD-Z-6suQ4xPvIrFzJM"

# Initialize the Gemini SDK client
client = genai.Client(api_key=os.environ["GOOGLE_API_KEY"])

# Memory storage to track progress
memory = []

# Using Gemini 2.0 Flash
MODEL_ID = "gemini-2.0-flash"

def safe_generate(prompt):
    """Wrapper to handle rate limits and connection issues."""
    while True:
        try:
            response = client.models.generate_content(
                model=MODEL_ID,
                contents=prompt
            )
            return response.text
        except (httpx.RemoteProtocolError, httpx.ConnectError) as e:
            time.sleep(5)
        except Exception as e:
            err_str = str(e).lower()
            if "429" in err_str or "exhausted" in err_str:
                # Silent wait or minimal print to keep output clean
                time.sleep(60)
            else:
                raise e

def planner(goal, previous_results):
    prompt = f"""
    You are a planning agent.
    Goal: {goal}
    Previous Context: {previous_results}
    Break the next steps into 3 specific tasks.
    Return tasks as a simple numbered list starting with 1. 2. 3.
    """
    return safe_generate(prompt)

def executor(task):
    prompt = f"Complete the following task briefly: {task}"
    return safe_generate(prompt)

def autonomous_agent(goal):
    print(f"Starting Agent... Goal: {goal}")
    
    for step in range(3):
        print(f"\n--- Planning Step {step + 1} ---")
        
        context = "\n".join(memory[-5:])
        tasks_raw = planner(goal, context)
        print("Tasks Generated:\n", tasks_raw.strip())
        
        # Parse tasks
        task_list = []
        for line in tasks_raw.split('\n'):
            line = line.strip()
            if line and any(line.startswith(f"{i}.") for i in range(1, 4)):
                task_list.append(line)
        
        for task in task_list:
            print(f"\nExecuting: {task}")
            result = executor(task)
            # Match the snippet's formatting for results
            clean_result = result.replace('\n', ' ').strip()
            print(f"Result: {clean_result[:150]}...")
            
            memory.append(f"Task: {task}\nResult: {clean_result}")
            
    print("\n— Final Summary of Progress ---")
    for m in memory:
        print(f"\n{m}")

if __name__ == "__main__":
    goal = "Research the top 3 benefits of solar energy and summarize them for a homeowner."
    autonomous_agent(goal)