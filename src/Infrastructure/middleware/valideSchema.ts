import { zValidator } from '@hono/zod-validator';
import type { ZodType } from 'zod';

export const validateJson = <T extends ZodType>(schema: T) => {
  return zValidator('json', schema,  async (result, c) => {
    if (!result.success) {
      const formattedErrors = result.error.issues.map((issue) => ({
        field: issue.path.join('.'),
        message: issue.message,
      }));

      return c.json(
        {
          success: false,
          message: 'Données invalides',
          errors: formattedErrors,
        },
        400
      );
    }
  });
};
