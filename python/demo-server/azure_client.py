from azure.mgmt.resource import SubscriptionClient
from azure.mgmt.containerservice import ContainerServiceClient
from .config import get_settings

def get_aks_info(credentials):
    settings = get_settings()
    subscription_client = SubscriptionClient(credentials)
    # List AKS clusters for the subscription
    # This is a placeholder for actual AKS retrieval logic
    return {"aks_clusters": "List of AKS clusters based on permissions"}

def get_subscription_info(credentials):
    subscription_client = SubscriptionClient(credentials)
    # List subscriptions and details
    # This is a placeholder for actual subscription retrieval logic
    return {"subscriptions": "List of subscriptions based on permissions"}
