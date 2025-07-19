import type { Request, RequestHandler, Response } from "express";
import { AuthService } from "./auth.service";

import prisma from "@/database/db";
export const authService = new AuthService(prisma);

class AuthController {
	public login: RequestHandler = async (req: Request, res: Response) => {
        const { email, password } = req.body;
		const serviceResponse = await authService.login({ email, password });
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};

	public register: RequestHandler = async (req: Request, res: Response) => {
        const { email, password, name } = req.body;
		const serviceResponse = await authService.register({ email, password, name });
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};
}

export const authController = new AuthController();
