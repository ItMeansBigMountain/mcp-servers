from typing import Any, Dict
from mcp.server.fastmcp import FastMCP
from azure.identity import ClientSecretCredential
from azure.mgmt.containerservice import ContainerServiceClient
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

# Azure credentials from .env
AZURE_CLIENT_ID = os.getenv("AZURE_CLIENT_ID")
AZURE_TENANT_ID = os.getenv("AZURE_TENANT_ID")
AZURE_CLIENT_SECRET = os.getenv("AZURE_CLIENT_SECRET")

# MCP server instance
mcp = FastMCP("aks-mcp-server")

# Azure authentication
credential = ClientSecretCredential(
    tenant_id=AZURE_TENANT_ID,
    client_id=AZURE_CLIENT_ID,
    client_secret=AZURE_CLIENT_SECRET
)

# Example: List AKS clusters for the authenticated user
@mcp.tool()
def list_aks_clusters(subscription_id: str) -> Dict[str, Any]:
    """
    List AKS clusters in the given Azure subscription.
    Args:
        subscription_id: Azure subscription ID
    Returns:
        Dictionary of cluster names and resource groups
    """
    client = ContainerServiceClient(credential, subscription_id)
    clusters = client.managed_clusters.list()
    return {
        "clusters": [
            {"name": c.name, "resource_group": c.resource_group_name}
            for c in clusters
        ]
    }

# Example: Get AKS cluster details
@mcp.tool()
def get_aks_cluster_details(subscription_id: str, resource_group: str, cluster_name: str) -> Dict[str, Any]:
    """
    Get details for a specific AKS cluster.
    Args:
        subscription_id: Azure subscription ID
        resource_group: Resource group name
        cluster_name: AKS cluster name
    Returns:
        Cluster details as a dictionary
    """
    client = ContainerServiceClient(credential, subscription_id)
    cluster = client.managed_clusters.get(resource_group, cluster_name)
    return cluster.as_dict()

# Example: List user permissions (stub for extension)
@mcp.tool()
def get_user_permissions(subscription_id: str) -> Dict[str, Any]:
    """
    Get the current user's Azure permissions for the subscription.
    Args:
        subscription_id: Azure subscription ID
    Returns:
        Permissions summary (stub)
    """
    # TODO: Integrate with Azure RBAC API for real permissions
    return {"permissions": "Not implemented. Extend with Azure RBAC API."}

if __name__ == "__main__":
    mcp.run()
