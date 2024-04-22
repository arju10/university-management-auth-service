import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import usersService from './app/modules/users/users.service'
const app: Application = express()

app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// Application routes
import usersRouter from './app/modules/users/users.route';

app.use("/api/v1/users/",usersRouter)

// Testing
// app.get('/', async (req: Request, res: Response) => {
//   await usersService.createUser({
//     id: '998',
//     password: '123',
//     role: 'student',
//   })
//   res.send('Woking successfully!')
// })
app.get("/",async(req:Request, res: Response)=> {
  res.send("Working successfully")
})
export default app
