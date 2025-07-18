import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import express, { RequestHandler, type Router } from "express";
import { z } from "zod";
import { GetUserSchema, UserSchema,  } from "@/api/user/userModel";
import { createApiResponse } from "@/api-docs/openAPIResponseBuilders";
import { validateRequest } from "@/common/utils/httpHandlers";
import { userController } from "./userController";
import { User } from "@/generated/prisma"

export const userRegistry = new OpenAPIRegistry();
export const userRouter: Router = express.Router();

userRegistry.register("User", UserSchema);

userRegistry.registerPath({
	method: "get",
	path: "/users",
	tags: ["User"],
	responses: createApiResponse(z.array(UserSchema), "Success"),
});

userRouter.get("/", userController.getUsers);

userRegistry.registerPath({
	method: "get",
	path: "/users/{id}",
	tags: ["User"],
	request: { params: GetUserSchema.shape.params },
	responses: createApiResponse(UserSchema, "Success"),
});

userRouter.get("/:id", validateRequest({ params: GetUserSchema }), userController.getUser);

userRouter.get(
	"/me", 
	validateRequest({ params: GetUserSchema }), 
	userController.getMyProfile as unknown as RequestHandler
);

userRouter.patch(
	"/:id", 
	validateRequest({ params: GetUserSchema }), 
	userController.updateUser as unknown as RequestHandler
);

userRouter.delete(
	"/:id", 
	validateRequest({ params: GetUserSchema }), 
	userController.deleteUser as unknown as RequestHandler
);