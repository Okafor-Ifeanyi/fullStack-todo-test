import { StatusCodes } from "http-status-codes";
import { PrismaClient, Status, Task } from "@/generated/prisma";
import { ServiceResponse } from "@/common/models/serviceResponse";
import { logger } from "@/server";

export class TodoService {
  constructor(private prisma: PrismaClient) {}

  // ✅ Create a new todo
  async create(
    userId: number,
    data: Pick<Task, "title" | "description" | "status">
  ): Promise<ServiceResponse<Task | null>> {
    try {
      const todo = await this.prisma.task.create({
        data: {
          title: data.title,
          description: data.description,
          userId,
          status: data.status || Status.PENDING, // Default status
        },
      });
      return ServiceResponse.success("Todo created successfully", todo);
    } catch (error) {
      logger.error(`Create todo error: ${(error as Error).message}`);
      return ServiceResponse.failure(
        "Failed to create todo",
        null,
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }

  // 📝 Update a todo
  async update(
    todoId: number,
    userId: number,
    data: Partial<Pick<Task, "title" | "description" | "status">>
  ): Promise<ServiceResponse<Task | null>> {
    try {
      const existing = await this.prisma.task.findUnique({
        where: { id: todoId },
      });

      if (!existing || existing.userId !== userId) {
        return ServiceResponse.failure(
          "Todo not found or unauthorized",
          null,
          StatusCodes.NOT_FOUND
        );
      }

      const updated = await this.prisma.task.update({
        where: { id: todoId },
        data,
      });

      return ServiceResponse.success("Todo updated successfully", updated);
    } catch (error) {
      logger.error(`Update todo error: ${(error as Error).message}`);
      return ServiceResponse.failure(
        "Failed to update todo",
        null,
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }

  // ❌ Delete a todo
  async delete(todoId: number, userId: number): Promise<ServiceResponse<null>> {
    try {
      const existing = await this.prisma.task.findUnique({
        where: { id: todoId },
      });

      if (!existing || existing.userId !== userId) {
        return ServiceResponse.failure(
          "Todo not found or unauthorized",
          null,
          StatusCodes.NOT_FOUND
        );
      }

      await this.prisma.task.delete({ where: { id: todoId } });
      return ServiceResponse.success("Todo deleted successfully", null);
    } catch (error) {
      logger.error(`Delete todo error: ${(error as Error).message}`);
      return ServiceResponse.failure(
        "Failed to delete todo",
        null,
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }

  // 📥 Get all todos for a user
  async getAll(userId: number): Promise<ServiceResponse<Task[]>> {
    try {
      const todos = await this.prisma.task.findMany({
        where: { userId },
        orderBy: { createdAt: "desc" },
      });
      return ServiceResponse.success("Todos fetched successfully", todos);
    } catch (error) {
      logger.error(`Fetch todos error: ${(error as Error).message}`);
      return ServiceResponse.failure(
        "Failed to fetch todos",
        [],
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }

  // 📥 Get all todos for a user
  async getATask(
    userId: number,
    taskId: number
  ): Promise<ServiceResponse<Task | null>> {
    try {
      const todo = await this.prisma.task.findFirst({
        where: { id: taskId, userId },
      });

      if (!todo) {
        return ServiceResponse.failure(
          "Todo not found or unauthorized",
          null,
          StatusCodes.NOT_FOUND
        );
      }

      return ServiceResponse.success("Todos fetched successfully", todo);
    } catch (error) {
      logger.error(`Fetch todos error: ${(error as Error).message}`);
      return ServiceResponse.failure(
        "Failed to fetch todos",
        null,
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }
}
