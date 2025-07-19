import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import express, { type Router } from "express";
import { z } from "zod";
import { UpdateUserSchema, UserIdSchema, UserSchema,  } from "@/api/user/userModel";
import { createApiResponse } from "@/api-docs/openAPIResponseBuilders";
import { validateRequest } from "@/common/utils/httpHandlers";
import { userController } from "./userController";
import { isAuthorized } from "@/common/middleware/JwtAuth";

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
	request: { params: UserIdSchema },
	responses: createApiResponse(UserSchema, "Success"),
});

userRouter.get(
	"/me", 
	isAuthorized,
	userController.getMyProfile
);
userRouter.get("/:id", validateRequest({ params: UserIdSchema }), userController.getUser);

userRouter.patch(
	"/:id", 
	validateRequest({ params: UserIdSchema, body: UpdateUserSchema }), 
	isAuthorized,
	userController.updateUser
);

userRouter.delete(
	"/:id", 
	validateRequest({ params: UserIdSchema }), 
	isAuthorized,
	userController.deleteUser
);