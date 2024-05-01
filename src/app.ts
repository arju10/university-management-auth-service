import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
const app: Application = express();

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// console.log(app.get('env'));

import { error } from 'winston';
import ApiError from './errors/ApiError';
import globalErrorHandler from './app/middlewares/globalErrorHandler';

// Application routes
import { UserRoutes } from './app/modules/user/user.route';
import { SemesterRoutes } from './app/modules/academicSemester/academicSemester.route';

app.use('/api/v1/users/', UserRoutes);
app.use('/api/v1/academic-semesters/', SemesterRoutes);

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
app.use(globalErrorHandler);

app.get('/', async (req: Request, res: Response) => {
  res.send('Working successfully');
  // console.log(x)
});
export default app;
