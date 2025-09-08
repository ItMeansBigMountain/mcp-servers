# MCP Server for Azure AKS (Python)

This project scaffolds a Model Context Protocol (MCP) server in Python, designed to securely connect AI applications to Azure AKS clusters. It authenticates users, reads their Azure subscription permissions, and exposes tools for querying AKS resources at the user's permission level. The codebase is structured for enterprise extensibility.

## References
- [MCP Python SDK](https://github.com/modelcontextprotocol/python-sdk)
- [MCP Specification](https://spec.modelcontextprotocol.io/)
- [MCP Server Concepts](https://modelcontextprotocol.io/docs/learn/server-concepts)
- [Azure AKS Python SDK](https://learn.microsoft.com/en-us/python/api/overview/azure/aks)
- [Security Best Practices](https://modelcontextprotocol.io/specification/2025-06-18/basic/security_best_practices)

## Quickstart
1. Install Python 3.10+ and [uv](https://github.com/astral-sh/uv).
2. Create a virtual environment and install dependencies:
   ```powershell
   uv venv; .venv\Scripts\activate; uv pip install mcp azure-identity azure-mgmt-containerservice python-dotenv
   ```
3. Configure Azure credentials in `.env` (see README.md).
4. Run the server:
   ```powershell
   python aks_mcp_server.py
   ```
5. Configure your MCP client (e.g., Claude Desktop, VS Code) to connect using stdio transport.

## Extensibility
- Add new tools in `tools/`.
- Integrate additional Azure services in `services/`.
- Follow enterprise security and logging practices.

---
This file is managed by GitHub Copilot for workspace setup and documentation compliance.
