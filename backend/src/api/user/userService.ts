import { StatusCodes } from "http-status-codes";
import { ServiceResponse } from "@/common/models/serviceResponse";
import { logger } from "@/server";
import { PrismaClient, User } from "@/generated/prisma";

export class UserService {
	constructor(private readonly prisma: PrismaClient) {}

	// Get all users
	async findAll(): Promise<ServiceResponse<User[] | null>> {
		try {
			const users = await this.prisma.user.findMany();
			if (!users.length) {
				return ServiceResponse.failure("No users found", null, StatusCodes.NOT_FOUND);
			}
			return ServiceResponse.success("Users found", users);
		} catch (error) {
			logger.error(`Error finding all users: ${(error as Error).message}`);
			return ServiceResponse.failure(
				"An error occurred while retrieving users.",
				null,
				StatusCodes.INTERNAL_SERVER_ERROR
			);
		}
	}

	// Get user by ID
	async findById(id: number): Promise<ServiceResponse<User | null>> {
		try {
			const user = await this.prisma.user.findUnique({ where: { id } });
			if (!user) {
				return ServiceResponse.failure("User not found", null, StatusCodes.NOT_FOUND);
			}
			return ServiceResponse.success("User found", user);
		} catch (error) {
			logger.error(`Error finding user with ID ${id}: ${(error as Error).message}`);
			return ServiceResponse.failure(
				"An error occurred while finding user.",
				null,
				StatusCodes.INTERNAL_SERVER_ERROR
			);
		}
	}

	// Update user by ID
	async updateById(id: number, data: Partial<User>): Promise<ServiceResponse<User | null>> {
		try {
			console.log("Updating user with ID:", id, "Data:", data);
			const userExists = await this.prisma.user.findUnique({ where: { id } });
			console.log("User exists:", userExists);
			
			if (!userExists) {
				return ServiceResponse.failure("User not found", null, StatusCodes.NOT_FOUND);
			}

			const updatedUser = await this.prisma.user.update({
				where: { id },
				data,
			});

			return ServiceResponse.success("User updated successfully", updatedUser);
		} catch (error) {
			logger.error(`Error updating user with ID ${id}: ${(error as Error).message}`);
			return ServiceResponse.failure(
				"An error occurred while updating user.",
				null,
				StatusCodes.INTERNAL_SERVER_ERROR
			);
		}
	}

	// Delete user by ID
	async deleteById(id: number): Promise<ServiceResponse<null>> {
		try {
			const userExists = await this.prisma.user.findUnique({ where: { id } });
			if (!userExists) {
				return ServiceResponse.failure("User not found", null, StatusCodes.NOT_FOUND);
			}

			await this.prisma.user.delete({ where: { id } });

			return ServiceResponse.success("User deleted successfully", null);
		} catch (error) {
			logger.error(`Error deleting user with ID ${id}: ${(error as Error).message}`);
			return ServiceResponse.failure(
				"An error occurred while deleting user.",
				null,
				StatusCodes.INTERNAL_SERVER_ERROR
			);
		}
	}
}


