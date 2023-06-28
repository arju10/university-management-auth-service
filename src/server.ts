import mongoose from "mongoose";
import app from "./app";
import config from "./config";
import logger from "./shared/logger";

async function main() {
  await mongoose.connect(config.database_url as string);
  logger.info("Connected to MongoDB");
  app.listen(config.port, () => {
    logger.error(`Server running at port http://localhost:${config.port}`);
  });
}
main();