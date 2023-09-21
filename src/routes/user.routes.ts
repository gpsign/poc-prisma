import { Router } from "express";
import { userControllers } from "@/controllers/user.controllers";
import { validateUser } from "@/middlewares/validateUser.middlewares";

const userRouter = Router();

userRouter.post("/users", validateUser, userControllers.create);
userRouter.get("/users", userControllers.read);

export default userRouter;
