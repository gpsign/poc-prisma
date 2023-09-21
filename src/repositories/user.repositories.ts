import prisma from "@/database/database.connection";
import { User } from "@prisma/client";

function insert(user: User) {
	return prisma.user.create({ data: user });
}

function getById(id: number) {
	return prisma.user.findUnique({ where: { id: id } });
}

function getByName(name: string) {
	return prisma.user.findUnique({ where: { username: name } });
}

function getAll() {
	return prisma.user.findMany();
}

export const userRepositories = { insert, getById, getByName, getAll };
