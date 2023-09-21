import prisma from "@/database/database.connection";
import { Movie } from "@prisma/client";

function insert(movie: Movie) {
	return prisma.movie.create({ data: movie });
}

function getById(id: number) {
	return prisma.movie.findFirst({
		select: {
			id: true,
			title: true,
			launchDate: true,
			rentedBy: { select: { username: true } },
			ratings: {
				select: {
					users: {
						select: {
							username: true,
							id: true,
						},
					},
					stars: true,
				},
			},
		},
		where: { id: id },
	});
}

function getByTitle(title: string) {
	return prisma.movie.findFirst({
		select: {
			id: true,
			title: true,
			launchDate: true,
			rentedBy: { select: { username: true } },
			ratings: {
				select: {
					users: {
						select: {
							username: true,
							id: true,
						},
					},
					stars: true,
				},
			},
		},
		where: { title: title },
	});
}

function getAll() {
	return prisma.movie.findMany({
		select: {
			id: true,
			title: true,
			launchDate: true,
			rentedBy: { select: { username: true } },
			ratings: {
				select: {
					users: {
						select: {
							username: true,
							id: true,
						},
					},
					stars: true,
				},
			},
		},
	});
}

export const movieRepositories = { insert, getById, getByTitle, getAll };
