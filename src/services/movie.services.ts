import { Movie } from "@prisma/client";
import { movieRepositories } from "@/repositories/movie.repositories";

async function create(movie: Movie) {
	const result = await movieRepositories.getByTitle(movie.title);

	if (result)
		throw { Type: "Request Conflict", Message: "Movie already exists." };

	await movieRepositories.insert(movie);
}

async function read(data: number | string) {
	if (typeof data === "string") {
		const result = await movieRepositories.getByTitle(data);
		return result;
	}
	if (typeof data === "number") {
		const result = await movieRepositories.getById(data);
		return result;
	}
}

async function readWithRatings() {
	const result = await movieRepositories.getAll();
	return result;
}

export const movieServices = { create, read, readWithRatings };
