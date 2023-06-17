import { Router } from "express";
import itemRouter from "./item.routes";
import orderRouter from "./order.routes";

const routes = Router();

routes.use("/api/items", itemRouter);
routes.use("/api/orders", orderRouter);

export default routes;
