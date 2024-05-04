import { IAcademicFaculty } from './academicFaculty.interface';
import { AcademicFaculty } from './academicFaculty.model';

// Create new Academic Faculty ==== API: ("/api/v1/academic-faculties/") === Method :[ POST]
const createFaculty = async (
  payload: IAcademicFaculty,
): Promise<IAcademicFaculty | null> => {
  const result = await AcademicFaculty.create(payload);
  return result;
};

export const AcademicFacultyService = {
  createFaculty,
};
