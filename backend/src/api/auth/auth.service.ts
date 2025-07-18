import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import { ServiceResponse } from "@/common/models/serviceResponse";
import { logger } from "@/server";
import { sendRegistrationEmail } from "@/common/utils/sendEmail";
import { env } from "@/common/utils/envConfig";
import { PrismaClient, User } from "@/generated/prisma";

export class AuthService {
  constructor(private prisma: PrismaClient) {}

  // 🔐 Register a new user
  async register(data: Pick<User, "name" | "email" | "password">): Promise<ServiceResponse<{ token: string; user: User } | null>> {
    try {
      const { email, name, password } = data;

      const existingUser = await this.prisma.user.findUnique({ where: { email } });
      if (existingUser) {
        return ServiceResponse.failure("Email already in use", null, StatusCodes.CONFLICT);
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await this.prisma.user.create({
        data: { name, email, password: hashedPassword },
      });

      await sendRegistrationEmail(user.email, user.name);
      const token = this.generateJwt(user);

      return ServiceResponse.success("User registered successfully", { token, user });
    } catch (error) {
      logger.error(`Registration error: ${(error as Error).message}`);
      return ServiceResponse.failure("Registration failed", null, StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }

  // 🔐 Login existing user
  async login(data: Pick<User, "email" | "password">): Promise<ServiceResponse<{ token: string; user: User } | null>> {
    try {
      const { email, password } = data;

      const user = await this.prisma.user.findUnique({ where: { email } });
      if (!user || !user.password) {
        return ServiceResponse.failure("Invalid credentials", null, StatusCodes.UNAUTHORIZED);
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return ServiceResponse.failure("Invalid credentials", null, StatusCodes.UNAUTHORIZED);
      }

      const token = this.generateJwt(user);
      return ServiceResponse.success("Login successful", { token, user });
    } catch (error) {
      logger.error(`Login error: ${(error as Error).message}`);
      return ServiceResponse.failure("Login failed", null, StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }

  // ❌ Delete user by ID
  async delete(userId: number): Promise<ServiceResponse<null>> {
    try {
      await this.prisma.user.delete({ where: { id: userId } });
      return ServiceResponse.success("User deleted successfully", null);
    } catch (error) {
      logger.error(`Delete user error: ${(error as Error).message}`);
      return ServiceResponse.failure("Failed to delete user", null, StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }

  // 🔑 JWT Generator
  private generateJwt(user: User): string {
    return jwt.sign(
      { id: user.id, email: user.email },
      env.JWT_SECRET,
      { expiresIn: "2h" }
    );
  }
}