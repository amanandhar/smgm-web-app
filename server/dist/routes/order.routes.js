"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var mysql_1 = __importDefault(require("mysql"));
var order_model_1 = require("../models/order.model");
var orderRouter = (0, express_1.Router)();
var connection = mysql_1.default.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
});
orderRouter.get("/", function (request, response) {
    connection.query("SELECT od.Id, od.OrderNumber, od.Name, od.ContactName, od.Address, od.SubTotal, od.Discount, od.Tax, od.DeliveryCharge, od.AddedDate, oi.ItemId, oi.Quantity FROM order_details od INNER JOIN order_items oi ON od.Id = oi.OrderId ORDER BY od.Id", function (error, rows) {
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
orderRouter.post("/", function (request, response) {
    var order = new order_model_1.Order();
    order.orderNumber = request.body.orderNumber;
    order.name = request.body.name;
    order.contactNumber = request.body.contactNumber;
    order.address = request.body.address;
    order.subTotal = request.body.subTotal;
    order.discount = request.body.discount;
    order.tax = request.body.tax;
    order.deliveryCharge = request.body.deliveryCharge;
    order.items = request.body.items;
    order.addedDate = new Date().toJSON();
    connection.query("INSERT INTO order_details (OrderName, Name, ContactNumber, Address, SubTotal, Discount, Tax, DeliveryCharge, AddedDate) VALUES ( " +
        order.orderNumber +
        ", " +
        order.name +
        ", " +
        order.contactNumber +
        ", " +
        order.address +
        ", " +
        order.subTotal +
        ", " +
        order.discount +
        ", " +
        order.tax +
        ", " +
        order.deliveryCharge +
        ", ", function (error, result) {
        var _a;
        if (error) {
            connection.destroy();
            return response.status(500).send("Error while executing query.");
        }
        var orderDetailsId = result.insertId;
        connection.query("INSERT INTO order_items (OrderId, ItemId, Quantity, AddedDate) VALUES ?", [
            (_a = order.items) === null || _a === void 0 ? void 0 : _a.map(function (item) { return [
                orderDetailsId,
                item.itemId,
                item.quantity,
                new Date().toJSON(),
            ]; }),
        ], function (error, result) {
            if (error) {
                connection.destroy();
                return response.status(500).send("Error while executing query.");
            }
            response.status(200).send("Records inserted successfully");
            connection.destroy();
        });
    });
});
exports.default = orderRouter;
