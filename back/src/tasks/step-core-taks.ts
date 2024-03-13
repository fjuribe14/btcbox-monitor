import cron from "node-cron";
import logger from "../logger";
// import { DB } from "../db";

export class StepCoreTask {
  constructor() {
    cron.schedule("*/7 * * * * *", async () => {
      logger.info("StepCoreTask started");
      await this.findAndUpdateOperation();
      logger.info("StepCoreTask finished");
    });
  }

  async findAndUpdateOperation() {
    try {
      // const operaciones = await DB.tb_operacion.findMany({
      //   take: 5,
      //   orderBy: { created_at: "desc" },
      //   where: { in_core: 0 },
      // });
      // await DB.tb_operacion.updateMany({
      //   where: { id_operacion: { in: operaciones.map((o) => o.id_operacion) } },
      //   data: { in_core: 1, updated_at: new Date() },
      // });
      // logger.info(`Operations has been updated: ${operaciones.length}`);
    } catch (err) {
      logger.error(err);
    }
  }
}
