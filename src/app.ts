import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors'
const app: Application = express()

app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// console.log(app.get('env'));

// Application routes

import { error } from 'winston'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import { UserRoutes } from './app/modules/users/user.route'
import ApiError from './errors/ApiError'

app.use('/api/v1/users/', UserRoutes)

// Testing
// app.get('/', async (req: Request, res: Response) => {
//   await usersService.createUser({
//     id: '998',
//     password: '123',
//     role: 'student',
//   })
//   res.send('Woking successfully!')
// })

// Testing
// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   throw new ApiError(400,"Ore Baba error");
//   // next('ore Baba error') //Error
// })

// Testing
// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   Promise.reject(new Error('Unhandled Promise Rejection'))
// })

// Global Error Handler
app.use(globalErrorHandler)

app.get('/', async (req: Request, res: Response) => {
  res.send('Working successfully')
  // console.log(x)
})
export default app
