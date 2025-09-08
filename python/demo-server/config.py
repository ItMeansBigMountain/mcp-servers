import os
from dotenv import load_dotenv

load_dotenv()

def get_settings():
    return {
        "AZURE_CLIENT_ID": os.getenv("AZURE_CLIENT_ID"),
        "AZURE_TENANT_ID": os.getenv("AZURE_TENANT_ID"),
        "AZURE_CLIENT_SECRET": os.getenv("AZURE_CLIENT_SECRET"),
        "OPENAI_API_KEY": os.getenv("OPENAI_API_KEY"),
    }
