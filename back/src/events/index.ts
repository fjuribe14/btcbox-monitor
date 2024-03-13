import { Server, Socket } from "socket.io";
import logger from "../logger";

export const events = {
  connected(socket: Socket) {
    console.log(`Socket ${socket.id} connected`);
  },
  disconnected(socket: Socket) {
    socket.addListener("disconnect", () => {
      console.log(`Socket ${socket.id} disconnected`);
    });
  },
  async init(io: Server) {},
};
