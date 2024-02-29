import cron from "node-cron";
import logger from "../logger";

export class SendOperationTask {
  constructor() {
    cron.schedule("*/10 * * * * *", () => {
      logger.info("SendOperationTask started");
      //   console.log();
      // Coloca aquí el código que deseas ejecutar cada minuto
    });
  }
}
