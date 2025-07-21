import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

import { commonValidations } from "@/common/utils/commonValidation";

extendZodWithOpenApi(z);

export type User = z.infer<typeof UserSchema>;
export const UserSchema = z.object({
	id: z.number(),
	name: z.string(),
	email: z.string().email(),
	avataar: z.string().optional(),
	password: z.string(),
	createdAt: z.date(),
	updatedAt: z.date(),
});

export const UpdateUserSchema = z.object({
	name: z.string().optional(),
	avaatar: z.string().optional(),
}).strict();

export const UserIdSchema = z.object({
	id: z.string().optional(),
}).strict();

// Input Validation for 'GET users/:id' endpoint
export const GetUserSchema = z.object({
	params: z.object({ id: commonValidations.id }),
});
