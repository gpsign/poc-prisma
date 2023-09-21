"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUser = void 0;
var users_schemas_1 = require("../schemas/users.schemas");
function validateUser(req, res, next) {
    var user = req.body;
    var validation = users_schemas_1.userSchema.validate(user, {
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
exports.validateUser = validateUser;
