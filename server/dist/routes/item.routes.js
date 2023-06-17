"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var mysql_1 = __importDefault(require("mysql"));
var itemRouter = (0, express_1.Router)();
itemRouter.get("/", function (request, response) {
    var pool = mysql_1.default.createPool({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        connectionLimit: Number(process.env.CONNECTION_LIMIT || 0),
        multipleStatements: true,
    });
    pool.getConnection(function (error, connection) {
        if (error) {
            console.log("Error getting connection", error);
            response.send({
                success: false,
                statusCode: 500,
                message: "Connection error",
            });
        }
        connection.query("SELECT i.Id, i.Name, i.Code, ic.Name as Category, i.Price, i.ImagePath FROM item i INNER JOIN item_category ic on i.CategoryId = ic.Id ORDER BY i.Id", function (error, rows) {
            if (error) {
                connection.destroy();
                return response.send({
                    sucess: false,
                    statusCode: 500,
                    message: "Error while executing query",
                });
            }
            response.json(rows);
            connection.destroy();
        });
    });
});
exports.default = itemRouter;
