import errorHandler from "@/middlewares/errorHandler.middlewares";
import { Router } from "express";
import userRouter from "./user.routes";
import movieRouter from "./movie.routes";
import ratingRouter from "./rating.routes";

const appRouter = Router();

appRouter.use(userRouter);
appRouter.use(movieRouter);
appRouter.use(ratingRouter);
appRouter.use(errorHandler);

export default appRouter;
