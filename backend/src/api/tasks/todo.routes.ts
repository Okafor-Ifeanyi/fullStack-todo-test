import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import express, { type Router } from "express";
import { z } from "zod";
import { createApiResponse } from "@/api-docs/openAPIResponseBuilders";
import { validateRequest } from "@/common/utils/httpHandlers";
import { todoController } from "./todo.controller";
import {
  CreateTodoSchema,
  UpdateTodoSchema,
  userIdSchema,
} from "./todo.schema";
import { isAuthorized } from "@/common/middleware/JwtAuth";

export const todoRegistry = new OpenAPIRegistry();
export const todoRouter: Router = express.Router();

todoRegistry.register("Task", CreateTodoSchema);

// Create Task
todoRegistry.registerPath({
  method: "post",
  path: "/tasks",
  tags: ["Tasks"],
  request: {
    body: {
      content: {
        "application/json": {
          schema: CreateTodoSchema,
        },
      },
    },
  },
  responses: createApiResponse(z.any(), "Task Created"),
});
todoRouter.post(
  "/",
  validateRequest({ body: CreateTodoSchema }),
  isAuthorized,
  todoController.create
);

// Get All Tasks
todoRegistry.registerPath({
  method: "get",
  path: "/tasks",
  tags: ["Tasks"],
  responses: createApiResponse(z.any(), "All Tasks"),
});
todoRouter.get("/", isAuthorized, todoController.getAll);

// Get Task by ID
todoRegistry.registerPath({
  method: "get",
  path: "/tasks/{id}",
  tags: ["Tasks"],
  parameters: [{ name: "id", in: "path", required: true }],
  responses: createApiResponse(z.any(), "Single Task"),
});
todoRouter.get(
  "/:id",
  validateRequest({ params: userIdSchema }),
  isAuthorized,
  todoController.getById
);

// Update Task
todoRegistry.registerPath({
  method: "put",
  path: "/tasks/{id}",
  tags: ["Tasks"],
  parameters: [{ name: "id", in: "path", required: true }],
  request: {
    body: {
      content: {
        "application/json": {
          schema: UpdateTodoSchema,
        },
      },
    },
  },
  responses: createApiResponse(z.any(), "Updated Task"),
});
todoRouter.patch(
  "/:id",
  validateRequest({ body: UpdateTodoSchema, params: userIdSchema }),
  isAuthorized,
  todoController.update
);

// Delete Task
todoRegistry.registerPath({
  method: "delete",
  path: "/tasks/{id}",
  tags: ["Tasks"],
  parameters: [{ name: "id", in: "path", required: true }],
  responses: createApiResponse(z.any(), "Deleted Task"),
});
todoRouter.delete(
  "/:id",
  validateRequest({ params: userIdSchema }),
  isAuthorized,
  todoController.delete
);
