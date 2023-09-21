"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var errorHandler_middlewares_1 = __importDefault(require("../middlewares/errorHandler.middlewares"));
var express_1 = require("express");
var users_routes_1 = __importDefault(require("./users.routes"));
var movies_routes_1 = __importDefault(require("./movies.routes"));
var ratings_routes_1 = __importDefault(require("./ratings.routes"));
var appRouter = (0, express_1.Router)();
appRouter.use(users_routes_1.default);
appRouter.use(movies_routes_1.default);
appRouter.use(ratings_routes_1.default);
appRouter.use(errorHandler_middlewares_1.default);
exports.default = appRouter;
