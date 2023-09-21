"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateMovie = void 0;
var movies_schemas_1 = require("../schemas/movies.schemas");
var dayjs_1 = __importDefault(require("dayjs"));
var customParseFormat = require("dayjs/plugin/customParseFormat");
dayjs_1.default.extend(customParseFormat);
function validateMovie(req, res, next) {
    var request = req.body;
    var validation = movies_schemas_1.movieSchema.validate(request, {
        abortEarly: false,
    });
    if (validation.error) {
        var Messages_1 = [];
        if (!(0, dayjs_1.default)(request.launchDate, "DD-MM-YYYY", true).isValid())
            Messages_1.push("Date must be in DD-MM-YYYY format");
        validation.error.details.forEach(function (detail) { return Messages_1.push(detail.message); });
        var error = {
            Type: "Unprocessable Entity",
            Message: Messages_1.join(", "),
        };
        throw error;
    }
    if (!(0, dayjs_1.default)(request.launchDate, "DD-MM-YYYY", true).isValid()) {
        throw {
            Type: "Unprocessable Entity",
            Message: "Date must be in DD-MM-YYYY format.",
        };
    }
    next();
}
exports.validateMovie = validateMovie;
