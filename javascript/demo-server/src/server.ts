import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import fs from "node:fs/promises";


// INIT CLIENT WITH FUNCTIONALITY CAPABILITY
const server = new McpServer({
    name: "test",
    version: "1.0.0",
    capabilites: {
        resources: {},
        tools: {},
        prompts: {},
        samplings: {}
    }
});


// PLACEHOLDER TOOL FUNCTION
server.tool(
    "PLACEHOLDER", // tool name
    "description: using zod in the schema for some reason.", // tool description
    { // tool parameters schema
        name: z.string(),
        email: z.string(),
        address: z.string(),
        phone: z.string()
    },
    {  // tool metadata 
        title: "create user",
        readOnlyHint: false, // If true, the tool does not modify its environment.
        destructiveHint: false, // If true, the tool may perform destructive updates to its environment. If false, the tool performs only additive updates.
        idempotentHint: false, // If true, calling the tool repeatedly with the same arguments will have no additional effect on the its environment.
        openWorldHint: true // If true, this tool may interact with an "open world" of external entities. If false, the tool's domain of interaction is closed. For example, the world of a web search tool is open, whereas that of a memory tool is not.
    },
    async (params) => {
        // CORE FUNCTIONALITY OF THE mcp TOOL/METHOD
        try {
            // write some code here ...
            console.error("[placeholder] args:", params); // safe log

            // TELL USER THE FUNCTION SUCCEEDED
            return {
                content: [
                    { type: "text", text: `your placeholder sir` }
                ]
            }
        } catch (error) {
            // TELL USER THE FUNCTION FAILED
            return {
                content: [
                    { type: "text", text: "please excuse me sir as i have failed" }
                ]
            }
        }

        // ALWAYS RETURN A RESPONSE WITH CONTENT
        return { content: [] }
    }
)

// USE CASE EXAMPLE FUNCTION - CREATE USER
server.tool(
    "create-user",
    "creates a new user in the database",
    {
        name: z.string(),
        email: z.string(),
        address: z.string(),
        phone: z.string()
    },
    {
        title: "create user",
        readOnlyHint: false,
        destructiveHint: false,
        idempotentHint: false,
        openWorldHint: true
    },
    async (params) => {
        try {
            const id = await createUser(params)
            return {
                content: [
                    { type: "text", text: `User created with id ${id}` }
                ]
            }
        } catch (error) {
            return {
                content: [
                    { type: "text", text: "Error creating user" }
                ]
            }
        }
        return { content: [] }
    }
)

// HELPER FUNCTIONS 
async function createUser(
    user: { name: string, email: string, address: string, phone: string }
) {
    // import users data
    const users = await import("../data/db.json", { with: { type: "json" } })
        .then(m => m.default);

    // create a new user id
    const id = users.length + 1;

    // add user to users data
    users.push({ id, ...user });

    // write users data to db.json
    await fs.writeFile(
        "data/db.json",
        JSON.stringify(users, null, 2)
    );
    return id;
}






// Calling main down here
async function main() {
    // CONNECT SERVER TO STDIO TRANSPORT
    const transport = new StdioServerTransport();
    await server.connect(transport);
}
main()