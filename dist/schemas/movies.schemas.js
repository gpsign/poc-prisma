"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.movieSchema = void 0;
var joi_1 = __importDefault(require("joi"));
exports.movieSchema = joi_1.default.object({
    title: joi_1.default.string().required().min(3).max(20),
    launchDate: joi_1.default.date().required(),
});
