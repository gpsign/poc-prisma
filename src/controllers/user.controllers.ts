import { User } from "@prisma/client";
import { UserParams } from "@/protocols/user.protocols";
import { userServices } from "@/services/users.services";
import { Request, Response } from "express";
import httpStatus from "http-status";

async function create(req: Request, res: Response) {
	const user = req.body as User;
	await userServices.create(user);
	return res.sendStatus(httpStatus.CREATED);
}

async function read(req: Request, res: Response) {
	const params = req.query as UserParams;
	console.log(typeof params.id);

	const users = await userServices.read(params);
	return res.status(httpStatus.OK).send(users);
}

export const userControllers = { create, read };
