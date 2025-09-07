import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import z from "zod";
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


// CREATING TOOL FUNCTIONS
server.tool(
    "create-user", // tool name
    "creates a new user in the database", // tool description
    { // tool parameters schema
        name: z.string(),
        email: z.string(),
        address: z.string(),
        phone: z.string()
    },
    {  // tool metadata
        title: "create user",
        readOnlyHint: false,
        destructiveHint: false,
        idempotentHint: false,
        openWorldHint: true
    },
    async (params) => {
        // FUNCTION TO CREATE A USER IN THE DATABASE
        try {
            const id = await createUser(params)
            // TELL USER THE FUNCTION SUCCEEDED
            return {
                content: [
                    { type: "text", text: `User created with id ${id}` }
                ]
            }
        } catch (error) {
            // TELL USER THE FUNCTION FAILED
            return {
                content: [
                    { type: "text", text: "Error creating user" }
                ]
            }
        }
        return {}
    }
)

// HELPER FUNCTIONS 
async function createUser(
    user: { name: string, email: string, address: string, phone: string }
) {
    // import users data
    const users = await import(
        "../data/db.json",
        { with: { type: "json" } }
    )
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


async function main() {
    // CONNECT SERVER TO STDIO TRANSPORT
    const transport = new StdioServerTransport();
    await server.connect(transport);
}


main()