import { Rating } from "@prisma/client";
import { movieRepositories } from "@/repositories/movie.repositories";
import { ratingRepositories } from "@/repositories/rating.repositories";
import { userRepositories } from "@/repositories/user.repositories";

async function create(rating: Rating) {
	const checkUser = await userRepositories.getById(rating.userId);
	if (checkUser === undefined)
		throw {
			Type: "Not Found",
			Message: "User not found.",
		};

	const checkMovie = await movieRepositories.getById(rating.movieId);
	if (checkMovie === undefined)
		throw {
			Type: "Not Found",
			Message: "Movie not found.",
		};

	const checkRating = await ratingRepositories.getSpecificRating(
		rating.userId,
		rating.movieId
	);

	if (checkRating)
		throw {
			Type: "Request Conflict",
			Message: "Movie already rated by user.",
		};

	await ratingRepositories.insert(rating);
}

async function read() {
	const result = await ratingRepositories.getRatings();
	return result;
}

async function update(rating: Rating) {
	const checkUser = await userRepositories.getById(rating.userId);
	if (checkUser === undefined)
		throw {
			Type: "Not Found",
			Message: "User not found.",
		};

	const checkMovie = await movieRepositories.getById(rating.movieId);
	if (checkMovie === undefined)
		throw {
			Type: "Not Found",
			Message: "Movie not found.",
		};

	const checkRating = await ratingRepositories.getSpecificRating(
		rating.userId,
		rating.movieId
	);

	if (checkRating === undefined)
		throw {
			Type: "Not Found",
			Message: "Rating not found.",
		};

	await ratingRepositories.updateRating(rating);
}

async function deleteRating(id: number) {
	const checkRating = await ratingRepositories.getRatingById(id);

	if (checkRating === undefined)
		throw {
			Type: "Not Found",
			Message: "Rating not found.",
		};

	await ratingRepositories.deleteRating(id);
}

export const ratingServices = { create, read, update, deleteRating };
