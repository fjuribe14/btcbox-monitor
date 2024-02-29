import cron from "node-cron";
import logger from "../logger";
import { DB } from "../db";

export class StepCsmfTask {
  constructor() {
    cron.schedule("*/6 * * * * *", async () => {
      logger.info("StepCsmfTask started");
      await this.findAndUpdateOperation();
      logger.info("StepCsmfTask finished");
    });
  }

  async findAndUpdateOperation() {
    try {
      const operaciones = await DB.tb_operacion.findMany({
        take: 5,
        orderBy: { created_at: "desc" },
        where: { in_csmf: 0 },
      });

      await DB.tb_operacion.updateMany({
        where: { id_operacion: { in: operaciones.map((o) => o.id_operacion) } },
        data: { in_csmf: 1, updated_at: new Date() },
      });

      logger.info(`Operations has been updated: ${operaciones.length}`);
    } catch (err) {
      logger.error(err);
    }
  }
}
