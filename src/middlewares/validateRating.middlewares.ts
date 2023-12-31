import { Rating } from "@prisma/client";
import { ratingSchema } from "@/schemas/rating.schemas";
import { NextFunction, Request, Response } from "express";

export function validateRating(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const user = req.body as Rating;
	const validation = ratingSchema.validate(user, {
		abortEarly: false,
	});

	if (validation.error) {
		const error = {
			Type: "Unprocessable Entity",
			Message: validation.error.details
				.map((detail) => detail.message)
				.join(", "),
		};
		throw error;
	}

	next();
}
