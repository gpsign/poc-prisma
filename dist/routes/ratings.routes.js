"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ratings_controllers_1 = require("../controllers/ratings.controllers");
var validateRating_middlewares_1 = require("../middlewares/validateRating.middlewares");
var ratingsRouter = (0, express_1.Router)();
ratingsRouter.post("/ratings", validateRating_middlewares_1.validateRating, ratings_controllers_1.ratingsControllers.create);
ratingsRouter.get("/ratings", ratings_controllers_1.ratingsControllers.read);
ratingsRouter.put("/ratings", ratings_controllers_1.ratingsControllers.update);
ratingsRouter.delete("/ratings", ratings_controllers_1.ratingsControllers.deleteRating);
exports.default = ratingsRouter;
