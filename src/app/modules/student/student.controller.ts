import { NextFunction, Request, RequestHandler, Response } from 'express';

import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import pick from '../../../shared/pick';
import { paginationFields } from '../../../constants/pagination';

import { IStudent } from './student.interface';
import { studentFilterableFields } from './student.constant';
import { StudentService } from './student.service';

// Get All Student with pagination ==== API: ("/api/v1/students/?page=1&limit=10") === Method :[ GET]
const getAllStudents = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, studentFilterableFields);
  const paginationOptions = pick(req.query, paginationFields);
  // console.log(paginationOptions);
  // console.log(filters)
  const result = await StudentService.getAllStudents(
    filters,
    paginationOptions,
  );

  sendResponse<IStudent[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Data is retrieved successfully',
    meta: result.meta,
    data: result.data,
  });
});

// Get Single Student By ID ==== API: ("/api/v1/students/:id) === Method :[ GET]
const getSingleStudent = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await StudentService.getSingleStudent(id);

  sendResponse<IStudent | null>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Single student retrieved successfully',
    data: result,
  });
});

// Update Single Student By ID ==== API: ("/api/v1/students/:id") === Method :[ Patch]
const updateStudent = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;

  const result = await StudentService.updateStudent(id, updatedData);

  sendResponse<IStudent | null>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'student updated successfully',
    data: result,
  });
});

// Delete Single Student By ID ==== API: ("/api/v1/students/:id") === Method :[ DELETE]

const deleteStudent = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await StudentService.deleteStudent(id);

  sendResponse<IStudent | null>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'student deleted successfully',
    data: result,
  });
});
export const StudentController = {
  getAllStudents,
  getSingleStudent,
  updateStudent,
  deleteStudent,
};
