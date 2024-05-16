// Business Logic/ Database Logic

import config from '../../../../config';
import ApiError from '../../../errors/ApiError';
import { AcademicSemester } from '../academicSemester/academicSemester.model';
import { IStudent } from '../student/student.interface';
import { IUser } from './user.interface';
import { User } from './user.model';
import { generateFacultyId, generateStudentId } from './user.utils';

const createStudent = async (
  student: IStudent,
  user: IUser,
): Promise<IUser | null> => {
  // Auto generated incremental ID
  // const academicSemester = {
  //   code: '01',
  //   year: '2025',
  // };

  // const id = await generateFacultyId();
  // user.id = id;

  // Default Password
  if (!user.password) {
    user.password = config.default_student_pass as string;
  }

  // set role
  user.role = 'student';

  const academicSemester = await AcademicSemester.findById(
    student.academicSemester,
  );

  // generate student id
  const id = await generateStudentId(academicSemester);

  const createdUser = await User.create(user);

  if (!createdUser) {
    throw new ApiError(400, 'Failed to create user!');
  }
  return createdUser;
};

export const UsersService = {
  createStudent,
};
