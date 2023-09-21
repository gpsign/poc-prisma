"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var movies_controllers_1 = require("../controllers/movies.controllers");
var validateMovie_middlewares_1 = require("../middlewares/validateMovie.middlewares");
var express_1 = require("express");
var moviesRouter = (0, express_1.Router)();
moviesRouter.post("/movies", validateMovie_middlewares_1.validateMovie, movies_controllers_1.moviesControllers.create);
exports.default = moviesRouter;
