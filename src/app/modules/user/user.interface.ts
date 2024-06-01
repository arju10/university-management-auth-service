import { Model, Types } from 'mongoose';
import { IStudent } from '../student/student.interface';
import { IAdmin } from '../admin/admin.interface';

export type IUser = {
  id: string;
  role: string;
  password: string;
  student?: Types.ObjectId | IStudent;
  // faculty?:Types.ObjectId | IFaculty; //Future
  admin?: Types.ObjectId | IAdmin;
};

export type UserModel = Model<IUser, Record<string, unknown>>;
