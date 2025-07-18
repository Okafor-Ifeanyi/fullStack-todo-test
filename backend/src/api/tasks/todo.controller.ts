import type { Request, RequestHandler, Response } from "express";
import { TodoService } from "./todo.service";
import prisma from "@/database/db";
import { Task } from "@/generated/prisma";

export const todoService = new TodoService(prisma);

interface CustomReq extends Request {
  userId?: string;
}

class TodoController {
  // Create a new task
  public create: RequestHandler = async (req: CustomReq, res: Response) => {
    const userId = parseInt(req.userId!, 10);
    const { title, description, status } = req.body;
    const serviceResponse = await todoService.create(userId, {
      title,
      description,
      status,
    });
    res.status(serviceResponse.statusCode).send(serviceResponse);
  };

  // Get all tasks
  public getAll: RequestHandler = async (req: CustomReq, res: Response) => {
    const userId = parseInt(req.userId!, 10);
    const serviceResponse = await todoService.getAll(userId);
    res.status(serviceResponse.statusCode).send(serviceResponse);
  };

  // Get a task by its ID
  public getById: RequestHandler = async (req: CustomReq, res: Response) => {
    const userId = parseInt(req.userId!, 10);
    const id = Number.parseInt(req.params.id as string, 10);
    const serviceResponse = await todoService.getATask(userId, id);
    res.status(serviceResponse.statusCode).send(serviceResponse);
  };

  // Update a task
  public update: RequestHandler = async (req: CustomReq, res: Response) => {
    const userId = parseInt(req.userId!, 10);
    const todoId = Number.parseInt(req.params.id as string, 10);
    const data: Partial<Task> = req.body;
    const serviceResponse = await todoService.update(todoId, userId, data);
    res.status(serviceResponse.statusCode).send(serviceResponse);
  };

  // Delete a task
  public delete: RequestHandler = async (req: CustomReq, res: Response) => {
    const userId = parseInt(req.userId!, 10);
    const todoId = Number.parseInt(req.params.id as string, 10);
    const serviceResponse = await todoService.delete(todoId, userId);
    res.status(serviceResponse.statusCode).send(serviceResponse);
  };
}

export const todoController = new TodoController();
