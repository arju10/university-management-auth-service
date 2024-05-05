import express from 'express';

import { AcademicDepartmentController } from './academicDepartment.controller';

const router = express.Router();

router.post(
  '/create-department',
  AcademicDepartmentController.createDepartment,
);
router.get('/:id', AcademicDepartmentController.getSingleDepartment);

router.patch('/:id', AcademicDepartmentController.updateDepartment);

router.get('/', AcademicDepartmentController.getAllDepartments);

export const AcademicDepartmentRoutes = router;
