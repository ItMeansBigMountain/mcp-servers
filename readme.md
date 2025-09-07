tools tools tools 

- did you know that using typescript files in a node project, you have to add a `tsconfig.json` file to make the app work

- there is a dev dependency that is like postman for mcp. its called inspector 
   - `npm install -D @modelcontextprotocol/inspector`
   - youll now need to go to the `package.json` and add the server.inspector to the scripts key [check javascript ](javascript\demo-server\package.json) 


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
	- Standard IO
		- Communicate through the terminal using stdin/stdout; best for local apps running together.
	- HTTP Streaming
		- Stream data over HTTP; ideal for web apps or remote clients not on the same network.

- 