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
import routes from './app/routes';
import httpStatus from 'http-status';
import { generateStudentId } from './app/modules/user/user.utils';

// app.use('/api/v1/users/', UserRoutes);
app.use('/api/v1/', routes);

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

//handle not found
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  });
  next();
});

// test student user id generate
const academicSemester = {
  code: '01',
  year: '2025',
};

const testId = async () => {
  const testId = await generateStudentId(academicSemester);
  console.log(testId);
};
testId();
// finish test student user id generate

app.get('/', async (req: Request, res: Response) => {
  res.send('Working successfully');
  // console.log(x)
});
export default app;
