import { ErrorRequestHandler } from 'express'
import config from '../../../config'
import { IGenericErrorMessage } from '../../interfaces/error'
import handleValidationError from '../../errors/handleValidationError'
import ApiError from '../../errors/ApiError'
import { errorlogger } from '../../shared/logger'

// Global Eror Handler
const globalErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
  // if (err instanceof Error) {
  //   res.status(400).json({
  //     error: err,
  //   })
  // } else {
  //   res.status(500).json({
  //     error: 'something went wrong!',
  //   })
  // }

  config.env === 'development'
    ? console.log('globalErrorHandler ~', error)
    : errorlogger.error('globalErrorHandler ~', error)

  let statusCode = 500
  let message = 'Something went wrong'
  let errorMessages: IGenericErrorMessage[] = []

  if (error?.name === 'ValidatorError') {
    const simplifiedError = handleValidationError(error)
    statusCode = simplifiedError.statusCode
    message = simplifiedError.message
    errorMessages = simplifiedError.errorMessages
  } else if (error instanceof ApiError) {
    statusCode = error?.statusCode
    message = error.message
    errorMessages = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : []
  } else if (error instanceof Error) {
    message = error?.message
    errorMessages = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : []
  }
  res.status(statusCode).json({
    sucess: false, // For Error Handling; sucess always be false;
    message,
    errorMessages,
    stack: config.env !== 'production' ? error?.stack : undefined,
  })
  next()
}

export default globalErrorHandler
