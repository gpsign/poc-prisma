"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
var pg_1 = __importDefault(require("pg"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var Pool = pg_1.default.Pool;
var config = {
    connectionString: process.env.DATABASE_URL,
};
if (process.env.NODE_ENV === "production")
    config.ssl = true;
exports.db = new Pool(config);
