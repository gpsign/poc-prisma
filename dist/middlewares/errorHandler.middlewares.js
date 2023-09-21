"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_status_1 = __importDefault(require("http-status"));
function errorHandler(error, req, res, next) {
    switch (error.Type) {
        case "Unprocessable Entity":
            error.Status = http_status_1.default.UNPROCESSABLE_ENTITY;
            return res.status(error.Status).send(error);
        case "Request Conflict":
            error.Status = http_status_1.default.CONFLICT;
            return res.status(error.Status).send(error);
        case "Not Found":
            error.Status = http_status_1.default.NOT_FOUND;
            return res.status(error.Status).send(error);
        case "Bad Request":
            error.Status = http_status_1.default.BAD_REQUEST;
            return res.status(error.Status).send(error);
        default:
            error.Status = http_status_1.default.INTERNAL_SERVER_ERROR;
            error.Type = "Internal Server Error";
            return res.status(error.Status).send(error);
    }
}
exports.default = errorHandler;
