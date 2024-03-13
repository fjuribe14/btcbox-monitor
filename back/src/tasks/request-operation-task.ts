import cron from "node-cron";
import logger from "../logger";
// import { DB } from "../db";
// import { io } from "../socket";

export class RequestOperationTask {
  constructor() {
    cron.schedule("*/3 * * * * *", async () => {
      logger.info("RequestOperationTask started");
      await this.requesttOperations();
      logger.info("RequestOperationTask finished");
    });
  }

  async requesttOperations() {
    try {
      // const result: any[] = await DB.$queryRaw`select
      //   count(*)::int as total,
      //   sum(in_btcbox)::int as btcbox,
      //   sum(in_csmf)::int as csmf,
      //   sum(in_core)::int as core,
      //   sum(in_inm)::int as inm
      //   from tb_operacion to2;`;
      // io.emit("sync", result[0]);
    } catch (err) {
      logger.error(err);
    }
  }
}
