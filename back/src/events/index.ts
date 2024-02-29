import { Server, Socket } from "socket.io";
import { DB } from "../db";
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
  async init(io: Server) {
    try {
      const result: any[] = await DB.$queryRaw`select 
        count(*)::int as total,
        sum(in_btcbox)::int as btcbox,
        sum(in_csmf)::int as csmf,
        sum(in_core)::int as core,
        sum(in_inm)::int as inm
        from tb_operacion to2;`;

      io.emit("init", result[0]);
    } catch (err) {
      logger.error(err);
    }
  },
};
