import logger from "./logger";
import { server } from "./socket";

// import "./tasks";

server.listen(process.env.APP_PORT || 8000, () =>
  logger.info(
    `Server on http${process.env.APP_SSL ? "s" : ""}://${
      process.env.APP_HOST || "localhost"
    }:${process.env.APP_PORT || 8000}`
  )
);
