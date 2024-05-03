import express from 'express';
import { AcademicSemesterValidation } from './academicSemester.validation';
import { AcademicSemesterController } from './academicSemester.controller';
import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();

router.post(
  '/create-semester',
  validateRequest(AcademicSemesterValidation.createAcademicSemesterZodSchema),
  AcademicSemesterController.createSemester,
);

router.get('/:id', AcademicSemesterController.getSingleSemester);
router.patch('/:id', AcademicSemesterController.updateSemester);

router.get('/', AcademicSemesterController.getAllSemesters);

export const SemesterRoutes = router;
