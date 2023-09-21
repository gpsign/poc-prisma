import { movieControllers } from "@/controllers/movie.controllers";
import { validateMovie } from "@/middlewares/validateMovie.middlewares";
import { Router } from "express";

const movieRouter = Router();

movieRouter.post("/movies", validateMovie, movieControllers.create);
movieRouter.get("/movies", movieControllers.read);

export default movieRouter;
