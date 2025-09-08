from azure.identity import ClientSecretCredential
from .config import get_settings

def get_azure_credentials():
    settings = get_settings()
    return ClientSecretCredential(
        tenant_id=settings["AZURE_TENANT_ID"],
        client_id=settings["AZURE_CLIENT_ID"],
        client_secret=settings["AZURE_CLIENT_SECRET"]
    )
