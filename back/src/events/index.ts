import { Server, Socket } from "socket.io";
import { DB } from "../db";

export const events = {
  connected(socket: Socket) {
    console.log(`Socket ${socket.id} connected`);
  },
  disconnected(socket: Socket) {
    socket.addListener("disconnect", () => {
      console.log(`Socket ${socket.id} disconnected`);
    });
  },
  async init(io: Server) {
    // await DB.$queryRaw`select count(*)::integer as total, st_operacion as status from tb_operacion_salida tos group by st_operacion`.then(
    //   (data) => {
    //     io.emit("init", data);
    //   }
    // );
  },
};
