"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var item_routes_1 = __importDefault(require("./item.routes"));
var item_routes_2 = __importDefault(require("./item.routes"));
var routes = (0, express_1.Router)();
routes.use("/api/items", item_routes_1.default);
routes.use("/api/orders", item_routes_2.default);
exports.default = routes;
