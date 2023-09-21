import { Router } from "express";
import { ratingControllers } from "@/controllers/rating.controllers";
import { validateRating } from "@/middlewares/validateRating.middlewares";

const ratingRouter = Router();

ratingRouter.post("/ratings", validateRating, ratingControllers.create);
ratingRouter.get("/ratings", ratingControllers.read);
ratingRouter.put("/ratings", ratingControllers.update);
ratingRouter.delete("/ratings", ratingControllers.deleteRating);

export default ratingRouter;
