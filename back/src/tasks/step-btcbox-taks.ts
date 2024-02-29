import cron from "node-cron";
import logger from "../logger";
import { DB } from "../db";

export class StepBtcboxTask {
  constructor() {
    cron.schedule("*/5 * * * * *", async () => {
      logger.info("StepBtcboxTask started");
      await this.findAndUpdateOperation();
      logger.info("StepBtcboxTask finished");
    });
  }

  async findAndUpdateOperation() {
    try {
      const operaciones = await DB.tb_operacion.findMany({
        take: 5,
        orderBy: { created_at: "desc" },
        where: { in_btcbox: 0 },
      });

      await DB.tb_operacion.updateMany({
        where: { id_operacion: { in: operaciones.map((o) => o.id_operacion) } },
        data: { in_btcbox: 1, updated_at: new Date() },
      });

      logger.info(`Operations has been updated: ${operaciones.length}`);
    } catch (err) {
      logger.error(err);
    }
  }
}
