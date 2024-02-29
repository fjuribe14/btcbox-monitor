import { Server, Socket } from "socket.io";
import http from "http";

// import { DB } from "./db";
import "./tasks";
import { events } from "./events";

const server = http.createServer();
const io = new Server(server, { cors: { origin: "*" } });

io.on("connection", async (socket: Socket) => {
  events.connected(socket);
  events.init(io);
  events.disconnected(socket);
  // io.on("disconnect", () => console.log(`Socket ${socket.id} disconnected`));
});

server.listen(8080, () => {
  console.log(`Server listening on port 8080`);
});
