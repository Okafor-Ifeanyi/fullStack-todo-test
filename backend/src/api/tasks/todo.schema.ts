import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";
import { commonValidations } from "@/common/utils/commonValidation";

extendZodWithOpenApi(z);

export const CreateTodoSchema = z
  .object({
    title: z.string(),
    description: z.string().min(1).max(500).optional(),
    status: z.enum(["PENDING", "IN_PROGRESS", "DONE"]).optional(),
    extras: z.record(z.any()).optional()
  })
  .strict();

export const UpdateTodoSchema = z
  .object({
    title: z.string().optional(),
    description: z.string().optional(),
    status: z.enum(["PENDING", "IN_PROGRESS", "DONE"]).optional(),
  })
  .strict();

// Input Validation for 'GET users/:id' endpoint
export const userIdSchema = z.object({ id: commonValidations.id })
