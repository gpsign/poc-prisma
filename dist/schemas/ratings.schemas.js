"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ratingSchema = void 0;
var joi_1 = __importDefault(require("joi"));
exports.ratingSchema = joi_1.default.object({
    userId: joi_1.default.number().required().min(1),
    movieId: joi_1.default.number().required().min(1),
    stars: joi_1.default.number().required().min(0).max(5),
});
