import { RequestHandler } from 'express';
import { UsersService } from './user.service';

const createUser: RequestHandler = async (req, res, next) => {
  try {
    const { user } = req.body;
    const result = await UsersService.createUser(user);

    res.status(200).json({
      success: true,
      message: 'User created successfully',
      data: result,
    });
  } catch (err) {
    // res.status(400).json({
    //   // sucess: false,
    //   // message: 'Failed to create user',
    //   error:error,
    // })
    next(err);
  }
};

export const UserController = {
  createUser,
};
