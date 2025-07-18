import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

import { commonValidations } from "@/common/utils/commonValidation";

extendZodWithOpenApi(z);

export const CreateUserSchema = z
  .object({
    name: z.string(),
    email: z.string().email(),
    password: z.number(),
  })
  .strict();

export const LoginUserSchema = z
  .object({
    email: z.string().email(),
    password: z.number(),
  })
  .strict();

// Input Validation for 'GET users/:id' endpoint
export const GetUserSchema = z.object({
	params: z.object({ id: commonValidations.id }),
});
