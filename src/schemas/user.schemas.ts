import { User } from "@prisma/client";
import Joi from "joi";

export const userSchema = Joi.object<User>({
	username: Joi.string().required().min(3).max(10),
});
