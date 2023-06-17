require("dotenv").config();
const Server = requires("./server");
const server = new Server();
server.listen();
