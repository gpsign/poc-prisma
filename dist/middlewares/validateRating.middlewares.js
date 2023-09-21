"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRating = void 0;
var ratings_schemas_1 = require("../schemas/ratings.schemas");
function validateRating(req, res, next) {
    var user = req.body;
    var validation = ratings_schemas_1.ratingSchema.validate(user, {
        abortEarly: false,
    });
    if (validation.error) {
        var error = {
            Type: "Unprocessable Entity",
            Message: validation.error.details
                .map(function (detail) { return detail.message; })
                .join(", "),
        };
        throw error;
    }
    next();
}
exports.validateRating = validateRating;
