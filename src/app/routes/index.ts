// Application routes

import express from 'express';
import { UserRoutes } from '../modules/user/user.route';
import { SemesterRoutes } from '../modules/academicSemester/academicSemester.route';
import { AcademicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.route';
import { AcademicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.route';
import { StudentRoutes } from '../modules/student/student.route';

import { ManagementDepartmentRoutes } from '../modules/managementDepartment/managementDepartment.route';
import { AdminRoutes } from '../modules/admin/admin.route';
import { FacultyRoutes } from '../modules/faculty/faculty.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/academic-semesters',
    route: SemesterRoutes,
  },
  {
    path: '/academic-faculties',
    route: AcademicFacultyRoutes,
  },
  {
    path: '/academic-departments',
    route: AcademicDepartmentRoutes,
  },
  {
    path: '/students',
    route: StudentRoutes,
  },
  {
    path: '/management-departments',
    route: ManagementDepartmentRoutes,
  },
  {
    path: '/admins',
    route: AdminRoutes,
  },

  { path: '/faculties', route: FacultyRoutes },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

// router.use('/users/', UserRoutes);
// router.use('/academic-semesters/', SemesterRoutes);

export default router;
