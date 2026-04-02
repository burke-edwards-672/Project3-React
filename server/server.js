import jsonServer from "json-server";

//https://github.com/typicode/json-server:
//"Automatically serves files from the public directory."
//To serve additional static directories, add a bunch of "-s ./{folder}"s to the command.
const server = jsonServer.create();
const router = jsonServer.router("db.json");

const middlewares = jsonServer.defaults();
server.use(middlewares);
server.use(router);

const PORT = process.env.port || 3000;

server.listen(PORT, () => {
    console.log("JSON Server running");
})
