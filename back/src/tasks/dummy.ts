import cron from "node-cron";
import logger from "../logger";
import { StateManagerInstance } from "../store";

export class Dummy {
  constructor() {
    cron.schedule("*/2 * * * * *", async () => {
      logger.info("Dummy started");
      logger.info(JSON.stringify(StateManagerInstance.getState()));
      logger.info("Dummy finished");
    });
  }
}
