import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { User } from '../user/user.model';
import { ILoginUser, ILoginUserResponse } from './auth.interface';
import bcrypt from 'bcrypt';
import jwt, { Secret } from 'jsonwebtoken';
import config from '../../../config';
import { jwtHelpers } from '../../../helpers/jwtHelpers';

const loginUser = async (payload: ILoginUser): Promise<ILoginUserResponse> => {
  const { id, password } = payload;

  // Check User Existence
  // const isUserExists = await User.findOne(
  //   { id },
  //   { id: 1, password: 1, needsPasswordChange: 1 },
  // ).lead();

  // Create instance of User
  // const user = new User();

  // Access to our instance methods
  const isUserExist = await User.isUserExist(id);
  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User does not exit');
  }

  // Match Password
  // const isPasswordMatched = await bcrypt.compare(password, isUserExist?.password);

  if (
    isUserExist.password &&
    !(await User.isPasswordMatched(password, isUserExist?.password))
  ) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Password is incorrect');
  }

  // create access token && refresh token
  const { id: userId, role, needsPasswordChange } = isUserExist;
  const accessToken = jwtHelpers.createToken(
    { userId, role },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string,
  );

  const refreshToken = jwtHelpers.createToken(
    { userId, role },
    config.jwt.refresh_secret as Secret,
    config.jwt.refresh_expires_in as string,
  );

  // console.log({ accessToken, refreshToken, needsPasswordChange });

  return {
    accessToken,
    refreshToken,
    needsPasswordChange,
  };
};

export const AuthService = {
  loginUser,
};
