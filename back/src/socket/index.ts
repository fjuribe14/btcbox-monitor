import { Server, Socket } from "socket.io";
import http from "http";

import { events } from "../events";

export const server = http.createServer();
export const io = new Server(server, { cors: { origin: "*" } });

io.on("connection", async (socket: Socket) => {
  events.connected(socket);
  events.init(io);
  events.disconnected(socket);
  // io.on("disconnect", () => console.log(`Socket ${socket.id} disconnected`));
});
