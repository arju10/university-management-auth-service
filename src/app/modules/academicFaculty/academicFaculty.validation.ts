import { z } from 'zod';

const createFacultyZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Tittle is required and to be unique',
    }),
  }),
});

export const AcademicFacultyValidation = {
  createFacultyZodSchema,
};
