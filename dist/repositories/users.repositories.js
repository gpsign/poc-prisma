"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRepositories = void 0;
var database_connection_1 = require("../database/database.connection");
function insert(user) {
    return database_connection_1.db.query("INSERT INTO users (username) VALUES ($1);", [user.username]);
}
function getById(id) {
    return database_connection_1.db.query("SELECT * FROM users WHERE users.id = $1;", [id]);
}
function getByName(name) {
    return database_connection_1.db.query("SELECT * FROM users WHERE users.username = $1;", [
        name,
    ]);
}
exports.usersRepositories = { insert: insert, getById: getById, getByName: getByName };
