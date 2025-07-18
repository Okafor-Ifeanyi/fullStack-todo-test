import type { Request, RequestHandler, Response } from "express";
import { UserService } from "@/api/user/userService";
import prisma from "@/database/db";

interface CustomReq extends Request {
	userId?: string
}

export const userService = new UserService(prisma);

class UserController {
	public getUsers: RequestHandler = async (_req: Request, res: Response) => {
		const serviceResponse = await userService.findAll();
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};

	public getUser: RequestHandler = async (req: Request, res: Response) => {
		const id = Number.parseInt(req.params.id as string, 10);
		const serviceResponse = await userService.findById(id);
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};

	public getMyProfile = async (req: CustomReq, res: Response) => {
		const id = parseInt(req.userId!);
		const serviceResponse = await userService.findById(id);
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};

	public updateUser = async (req: CustomReq, res: Response) => {
		const id = parseInt(req.userId!);
		const userData = req.body;
		const serviceResponse = await userService.updateById(id, userData);
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};

	public deleteUser = async (req: CustomReq, res: Response) => {
		const id = parseInt(req.userId!);
		const serviceResponse = await userService.deleteById(id);
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};
}

export const userController = new UserController();
