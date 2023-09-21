import { Movie } from "@prisma/client";
import Joi from "joi";

export const movieSchema = Joi.object<Movie>({
	title: Joi.string().required().min(3).max(20),
	launchDate: Joi.date().required(),
});
