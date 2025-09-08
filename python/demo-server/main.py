from fastapi import FastAPI, Depends
from .config import get_settings
from .auth import get_azure_credentials
from .azure_client import get_aks_info, get_subscription_info
from .ai_query import answer_query
import logging
from .logging_config import setup_logging

setup_logging()
app = FastAPI(title="MCP Azure AKS Server")

@app.get("/health")
def health():
    return {"status": "ok"}

@app.get("/aks-info")
def aks_info(credentials=Depends(get_azure_credentials)):
    return get_aks_info(credentials)

@app.get("/subscription-info")
def subscription_info(credentials=Depends(get_azure_credentials)):
    return get_subscription_info(credentials)

@app.post("/ai-query")
def ai_query(query: str, credentials=Depends(get_azure_credentials)):
    return answer_query(query, credentials)
