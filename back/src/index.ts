import logger from "./logger";
import { server } from "./socket";

import "./tasks";

server.listen(8080, () => logger.info(`Server on http://localhost:8080`));
