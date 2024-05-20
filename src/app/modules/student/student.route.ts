import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { UserValidation } from '../user/user.validation';
import { UserController } from '../user/user.controller';
import { StudentController } from './student.controller';

const router = express.Router();

router.get('/:id', StudentController.getSingleStudent);
router.get('/', StudentController.getAllStudents);

router.get('/:id', StudentController.deleteStudent);
router.patch('/:id', StudentController.updateStudent);

// router.post(
//   '/create-student',
//   validateRequest(UserValidation.createUserZodSchema),
//   UserController.createStudent,
// );

export const StudentRoutes = router;
