import express, { Application, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';
// import usersService from './app/modules/users/users.service';

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Testing
// app.get('/', async(req: Request, res: Response) => {
//   await usersService.createUser({
//     id: '1000',
//     password: '123',
//     role: 'student',
//    })
//   res.send("Working Successfully!")
// });

app.get('/', async(req: Request, res: Response) => {
  res.send("Working Successfully!")
});

// Routes
import usersRouter from './app/modules/users/users.route';
app.use('/api/v1/users',usersRouter);

export default app;
