import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import express, { type Router } from "express";
import { z } from "zod";
import { createApiResponse } from "@/api-docs/openAPIResponseBuilders";
import { validateRequest } from "@/common/utils/httpHandlers";
import { authController } from "./auth.controller";
import { CreateUserSchema, LoginUserSchema } from "./auth.schema";

export const authRegistry = new OpenAPIRegistry();
export const authRouter: Router = express.Router();

authRegistry.register("Auth", CreateUserSchema);

authRegistry.registerPath({
	method: "get",
	path: "/auth/login",
	tags: ["Auth"],
	responses: createApiResponse(z.array(CreateUserSchema), "Success"),
});

authRouter.get("/login", validateRequest({ body: LoginUserSchema }), authController.login);

authRegistry.registerPath({
	method: "get",
	path: "/auth/register",
	tags: ["Auth"],
	request: {
        body: {
          content: {
            "application/json": {
              schema: CreateUserSchema,
            },
          },
        },
      },
	responses: createApiResponse(CreateUserSchema, "Success"),
});

authRouter.get("/register", validateRequest({ body: CreateUserSchema }), authController.register);
