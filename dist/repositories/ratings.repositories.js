"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ratingsRepositories = void 0;
var database_connection_1 = require("../database/database.connection");
function insert(rating) {
    return database_connection_1.db.query("INSERT INTO ratings (userId, movieId, stars) VALUES ($1, $2, $3);", [rating.userId, rating.movieId, rating.stars]);
}
function getRatingById(id) {
    return database_connection_1.db.query("SELECT * FROM ratings WHERE id = $1;", [id]);
}
function getRatingsbyMovieId(id) {
    return database_connection_1.db.query("\n    SELECT m.title, \n    ARRAY_AGG(json_build_object(\n      'ratingId', r.id,\n      'user', u.username, \n      'stars', r.stars)) AS \"ratings\"\n    FROM ratings r\n    INNER JOIN users u ON u.id = r.userId\n    INNER JOIN movies m ON m.id = r.movieid\n    GROUP BY m.title\n    WHERE r.movieId = $1;\n    ", [id]);
}
function getRatingsbyUserId(id) {
    return database_connection_1.db.query("\n    SELECT r.id AS \"ratingId\", m.title AS \"movieTitle\", u.username AS \"user\", r.stars AS \"stars\"\n    FROM ratings r\n    INNER JOIN movies m ON m.id = r.movieId\n    INNER JOIN users u ON u.id = r.userId\n    WHERE r.userId = $1\n    ORDER BY m.launchDate;\n    ", [id]);
}
function getSpecificRating(userId, movieId) {
    return database_connection_1.db.query("\n    SELECT r.id AS \"ratingId\", m.title AS \"movieTitle\", u.username AS \"user\", r.stars AS \"stars\"\n    FROM ratings r\n    INNER JOIN movies m ON m.id = r.movieId\n    INNER JOIN users u ON u.id = r.userId\n    WHERE r.userId = $1 AND r.movieId = $2\n    ORDER BY m.launchDate;\n    ", [userId, movieId]);
}
function getRatings() {
    return database_connection_1.db.query("\n    SELECT m.title, \n    ARRAY_AGG(json_build_object(\n      'ratingId', r.id,\n      'user', u.username, \n      'stars', r.stars)) AS \"ratings\"\n    FROM ratings r\n    INNER JOIN users u ON u.id = r.userId\n    INNER JOIN movies m ON m.id = r.movieid\n    GROUP BY m.title;\n    ");
}
function deleteRating(id) {
    return database_connection_1.db.query("DELETE FROM ratings WHERE id = $1;", [id]);
}
function updateRating(rating) {
    return database_connection_1.db.query("UPDATE ratings SET stars = $1 WHERE movieId = $2 AND userId = $3;", [rating.stars, rating.movieId, rating.userId]);
}
exports.ratingsRepositories = {
    insert: insert,
    getRatingById: getRatingById,
    getRatings: getRatings,
    getRatingsbyMovieId: getRatingsbyMovieId,
    getRatingsbyUserId: getRatingsbyUserId,
    getSpecificRating: getSpecificRating,
    deleteRating: deleteRating,
    updateRating: updateRating,
};
