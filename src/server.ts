import mongoose from 'mongoose';
import config from './config/index';
import app from './app';
import { errorlogger, logger } from './shared/logger';
import { Server } from 'http';

process.on('uncaughtException', error => {
  // console.log('Uncaught exception is detected ..............')
  errorlogger.error(error);
  process.exit(1);
});

let server: Server;
async function boostrap() {
  try {
    await mongoose.connect(config.database_url as string);
    logger.info(`Database is connected successfully`);

    // Server is running
    app.listen(config.port, () => {
      logger.info(`Server is running on port http://localhost:${config.port}`);
    });
  } catch (error) {
    errorlogger.error('Failed to connect Database', error);
  }

  process.on('unhandledRejection', error => {
    // console.log("Unhandled Rejection is detected, we are closing our server.............")
    if (server) {
      server.close(() => {
        errorlogger.error(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}

boostrap();

// console.log(x)

process.on('SIGTERM', () => {
  logger.info('SIGTERM is received');
  if (server) {
    server.close();
  }
});
