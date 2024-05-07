import { NextFunction, Request, RequestHandler, Response } from 'express';
import { UsersService } from './user.service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const createUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { ...userData } = req.body;
    const result = await UsersService.createUser(userData);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User is created successfully',
      data: result,
    });

    // res.status(200).json({
    //   success: true,
    //   message: 'User created successfully',
    //   data: result,
    // });
  },
);

export const UserController = {
  createUser,
};
