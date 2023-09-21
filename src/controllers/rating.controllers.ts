import { Rating } from "@prisma/client";
import { ratingServices } from "@/services/rating.services";
import { Request, Response, response } from "express";
import httpStatus from "http-status";

async function create(req: Request, res: Response) {
	const rating = req.body as Rating;

	await ratingServices.create(rating);
	return res.sendStatus(httpStatus.CREATED);
}

async function read(req: Request, res: Response) {
	const result = await ratingServices.read();
	return res.status(httpStatus.OK).send(result);
}

async function deleteRating(req: Request, res: Response) {
	const rating = req.body as Rating;
	await ratingServices.deleteRating(rating.id);
	return res.sendStatus(httpStatus.OK);
}

async function update(req: Request, res: Response) {
	const rating = req.body as Rating;

	await ratingServices.update(rating);
	return res.sendStatus(httpStatus.OK);
}

export const ratingControllers = { create, read, update, deleteRating };
