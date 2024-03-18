import cron from "node-cron";

export class CorecceTask {
  constructor() {
    cron.schedule("*/2 * * * * *", async () => {});
  }
}
