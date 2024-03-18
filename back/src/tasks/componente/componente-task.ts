import cron from "node-cron";
// import { TbComponente } from "../../db/models/tb_componente";
import logger from "../../logger";

export class ComponenteTask {
  constructor() {
    cron.schedule("*/5 * * * * *", async () => {
      //   const result = await tb_componente.findAll({
      //     where: {
      //       ST_COMPONENTE: 1,
      //     },
      //   });
      //   logger.info(JSON.stringify(result));
    });
  }
}
