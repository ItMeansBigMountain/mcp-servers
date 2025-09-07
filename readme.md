tools tools tools 

- did you know that using typescript files in a node project, you have to add a `tsconfig.json` file to make the app work

- there is a dev dependency that is like postman for mcp. its called inspector 
   - `npm install -D @modelcontextprotocol/inspector`
   - youll now need to go to the `package.json` and add the server.inspector to the scripts key [check javascript ](javascript\demo-server\package.json) 

- theres this error in the [javascript/demo-server](javascript/demo-server) where on startup the npm node banner messes with the st.out of the console... so you have to use `console.Error()` to log stuff in the console when using transport st.out




---

# add mcp servers into vs code from github
`the .vscode folder can help set some project configurations`
you can create a `mcp.json` 
add write the reference to the mcp server
go to the file and click on add server
`npm` `pip` `docker image`

# create your own mcp server notes 
[youtube video to learn mcp](https://www.youtube.com/watch?v=ZoZxQwp1PiM)

### mcp servers...
- tools 
- resources 
- prompts 
- samplings 

#### tools 
basically! call functions...

#### resource
data you have access to within the mcp server code base

#### prompt
you can create a prompt on the server and the user(client) can ask for that prompt 

#### samplings
when the server gets information from the ai context.


### main() function

- TRANSPORT (Python & JavaScript)
	- STDIO
		- Communicate through standard input/output streams; best for local development and direct terminal interaction.
	- Streamable HTTP
		- Bi-directional streaming over HTTP; recommended for web applications and remote clients needing continuous data flow.
	- SSE (Server-Sent Events)
		- One-way server-to-client event streaming over HTTP; useful for sending real-time updates from server to client. **(Deprecated in favor of HTTP streaming)**