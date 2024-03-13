import cron from "node-cron";
import logger from "../logger";
// import { DB } from "../db";

const randomNumber = Math.floor(Math.random() * 100);

export class SendOperationTask {
  constructor() {
    cron.schedule("* * * * * *", async () => {
      logger.info("SendOperationTask started");
      await this.startOperation();
      logger.info("SendOperationTask finished");
    });
  }

  async startOperation() {
    try {
      // const result = await DB.tb_operacion.createMany({
      //   data: Array.from({ length: randomNumber }).map(() => ({})),
      // });
      // logger.info(`Operation #${result.count} has been created`);
    } catch (err) {
      logger.error(err);
    }
  }
}
