"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var users_controllers_1 = require("../controllers/users.controllers");
var validateUser_middlewares_1 = require("../middlewares/validateUser.middlewares");
var userRouter = (0, express_1.Router)();
userRouter.post("/users", validateUser_middlewares_1.validateUser, users_controllers_1.usersControllers.create);
exports.default = userRouter;
