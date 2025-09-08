import openai
from .config import get_settings

def answer_query(query: str, credentials):
    settings = get_settings()
    openai.api_key = settings["OPENAI_API_KEY"]
    # Placeholder for actual AKS context-aware AI logic
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[{"role": "system", "content": "You are an expert on Azure AKS."},
                  {"role": "user", "content": query}]
    )
    return {"answer": response.choices[0].message["content"]}
