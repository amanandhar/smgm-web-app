import { Router } from "express";
import itemRouter from "./item.routes";
import orderRouter from "./order.routes";
import orderItemRouter from "./orderItem.routes";

const routes = Router();

routes.use("/api/items", itemRouter);
routes.use("/api/orders", orderRouter);
routes.use("/api/order-items", orderItemRouter);

export default routes;
