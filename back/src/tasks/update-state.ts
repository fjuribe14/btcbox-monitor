import cron from "node-cron";
import logger from "../logger";
import { StateManagerInstance } from "../store";

export class UpdateState {
  constructor() {
    cron.schedule("*/5 * * * * *", async () => {
      logger.info("UpdateState started");
      StateManagerInstance.updateState({
        lastUpdate: new Date(),
      });
      logger.info("UpdateState finished");
    });
  }
}
