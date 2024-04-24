import mongoose from 'mongoose'
import config from '../config/index'
import app from './app'
import { errorlogger, logger } from './shared/logger'

async function boostrap() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info(`Database is connected successfully`)

    // Server is running
    app.listen(config.port, () => {
      logger.info(`Server is running on port http://localhost:${config.port}`)
    })
  } catch (error) {
    errorlogger.error('Failed to connect Database', error)
  }
}

boostrap()
