import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";
import { commonValidations } from "@/common/utils/commonValidation";

extendZodWithOpenApi(z);

export const CreateTodoSchema = z
  .object({
    title: z.string(),
    description: z.string().min(1).max(500),
    status: z.enum(["PENDING", "IN_PROGRESS", "DONE"]),
  })
  .strict();

export const UpdateTodoSchema = z
  .object({
    title: z.string().email().optional(),
    description: z.number().optional(),
    status: z.enum(["PENDING", "IN_PROGRESS", "DONE"]).optional(),
  })
  .strict();

// Input Validation for 'GET users/:id' endpoint
export const userIdSchema = z.object({ id: commonValidations.id })
