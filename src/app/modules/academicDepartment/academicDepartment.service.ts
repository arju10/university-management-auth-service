import { IAcademicDepartment } from './academicDepartment.interface';
import { AcademicDepartment } from './academicDepartment.model';

// Create new Academic Department ==== API: ("/api/v1/academic-departments/create-department") === Method :[ POST]
const createDepartment = async (
  payload: IAcademicDepartment,
): Promise<IAcademicDepartment | null> => {
  const result = (await AcademicDepartment.create(payload)).populate(
    'academicFaculty',
  );
  return result;
};

export const AcademicDepartmentService = {
  createDepartment,
};
