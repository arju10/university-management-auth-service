import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { AcademicDepartmentService } from './academicDepartment.service';
import { IAcademicDepartment } from './academicDepartment.interface';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { academicDepartmentFilterableFields } from './academicDepartment.constant';
import pick from '../../../shared/pick';
import { paginationFields } from '../../../constants/pagination';

// Create new Academic Department ==== API: ("/api/v1/academic-departments/create-department") === Method :[ POST]
const createDepartment = catchAsync(async (req: Request, res: Response) => {
  const { ...academicDepartmentData } = req.body;
  const result = await AcademicDepartmentService.createDepartment(
    academicDepartmentData,
  );

  sendResponse<IAcademicDepartment>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Department created successfully',
    data: result,
  });
});

// Get All Academic Department with pagination ==== API: ("/api/v1/academic-departments/?page=1&limit=10") === Method :[ GET]
const getAllDepartments = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, academicDepartmentFilterableFields);
  const paginationOptions = pick(req.query, paginationFields);

  const result = await AcademicDepartmentService.getAllDepartments(
    filters,
    paginationOptions,
  );

  sendResponse<IAcademicDepartment[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic departments fetched successfully',
    meta: result.meta,
    data: result.data,
  });
});
export const AcademicDepartmentController = {
  createDepartment,
  getAllDepartments,
};
