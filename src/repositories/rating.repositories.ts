import prisma from "@/database/database.connection";
import { Rating } from "@prisma/client";
function insert(rating: Rating) {
	return prisma.rating.create({ data: rating });
}

function getRatingById(id: number) {
	return prisma.rating.findFirst({
		where: { id: id },
		select: {
			id: true,
			movies: { select: { title: true, launchDate: true } },
			users: { select: { id: true, username: true } },
			stars: true,
		},
	});
}

function getRatingsbyMovieId(id: number) {
	return prisma.rating.findMany({
		where: { movieId: id },
		select: {
			id: true,
			movies: { select: { title: true, launchDate: true } },
			users: { select: { id: true, username: true } },
			stars: true,
		},
	});
}

function getRatingsbyUserId(id: number) {
	return prisma.rating.findMany({
		where: { userId: id },
		select: {
			id: true,
			movies: { select: { title: true, launchDate: true } },
			users: { select: { id: true, username: true } },
			stars: true,
		},
	});
}

function getSpecificRating(userId: number, movieId: number) {
	return prisma.rating.findFirst({
		where: { userId: userId, movieId: movieId },
		select: {
			id: true,
			movies: { select: { title: true, launchDate: true } },
			users: { select: { id: true, username: true } },
			stars: true,
		},
	});
}

function getRatings() {
	return prisma.rating.findMany({
		select: {
			id: true,
			movies: { select: { title: true, launchDate: true } },
			users: { select: { id: true, username: true } },
			stars: true,
		},
	});
}

function deleteRating(id: number) {
	return prisma.rating.delete({
		where: { id: id },
	});
}

function updateRating(rating: Rating) {
	return prisma.rating.update({
		where: {
			combId: { userId: rating.userId, movieId: rating.movieId },
		},
		data: rating,
	});
}

export const ratingRepositories = {
	insert,
	getRatingById,
	getRatings,
	getRatingsbyMovieId,
	getRatingsbyUserId,
	getSpecificRating,
	deleteRating,
	updateRating,
};
