import { User } from "@prisma/client";
import { UserParams } from "@/protocols/user.protocols";
import { userRepositories } from "@/repositories/user.repositories";

async function create(user: User) {
	const result = await userRepositories.getByName(user.username);

	if (result)
		throw { Type: "Request Conflict", Message: "Username already in use." };

	await userRepositories.insert(user);
}

async function read(params: UserParams) {
	if (typeof params.id === "string") {
		const result = await userRepositories.getById(Number(params.id));
		return result;
	}
	if (typeof params.name === "string") {
		const result = await userRepositories.getByName(params.name);
		return result;
	} else {
		const result = await userRepositories.getAll();
		return result;
	}
}

export const userServices = { create, read };
