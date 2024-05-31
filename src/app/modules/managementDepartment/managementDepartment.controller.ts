import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IManagementDepartment } from './managementDepartment.interface';
import { ManagementDepartmentService } from './managementDepartment.service';
import { Request, Response } from 'express';

const createDepartment = catchAsync(async (req: Request, res: Response) => {
  const { ...departmentData } = req.body;
  const result =
    await ManagementDepartmentService.createDepartment(departmentData);

  sendResponse<IManagementDepartment>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Management department created successfully',
    data: result,
  });
});

export const ManagementDepartmentController = {
  createDepartment,
};
