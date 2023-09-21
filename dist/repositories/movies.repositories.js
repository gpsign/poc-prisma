"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moviesRepositories = void 0;
var database_connection_1 = require("../database/database.connection");
function insert(movie) {
    return database_connection_1.db.query("INSERT INTO movies (title, launchDate) VALUES ($1, $2);", [
        movie.title,
        movie.launchDate,
    ]);
}
function getById(id) {
    return database_connection_1.db.query("SELECT * FROM movies WHERE movies.id = $1;", [id]);
}
function getByTitle(title) {
    return database_connection_1.db.query("SELECT * FROM movies WHERE movies.title = $1;", [
        title,
    ]);
}
exports.moviesRepositories = { insert: insert, getById: getById, getByTitle: getByTitle };
