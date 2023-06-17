import { Router, Request, Response } from "express";
import mysql, { Connection } from "mysql";
import { Item } from "../models/item.model";
import { Order } from "../models/order.model";
const orderRouter = Router();

// const connection = mysql.createConnection({
//   host: process.env.HOST,
//   user: process.env.USER,
//   password: process.env.PASSWORD,
//   database: process.env.DATABASE,
// });

orderRouter.get("/", (request: Request, response: Response) => {
  const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    connectionLimit: Number(process.env.CONNECTION_LIMIT || 0),
    multipleStatements: true,
  });
  pool.getConnection((error: any, connection: Connection) => {
    if (error) {
      connection.destroy();
      response.status(500).send("Connection error");
    }

    connection.query(
      "SELECT od.Id, od.OrderNumber, od.Name, od.ContactNumber, od.Address, od.SubTotal, od.Discount, od.Tax, od.DeliveryCharge, od.AddedDate, oi.ItemId, oi.Quantity FROM order_details od INNER JOIN order_items oi ON od.Id = oi.OrderId ORDER BY od.Id",
      function (error: any, rows: any) {
        if (error) {
          connection.destroy();
          return response.status(500).send("Error while executing query");
        }

        response.status(200).json(rows);
        connection.destroy();
      }
    );
  });
});

orderRouter.post("/", (request: Request, response: Response) => {
  const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    connectionLimit: Number(process.env.CONNECTION_LIMIT || 0),
    multipleStatements: true,
  });

  let order = new Order();
  order.orderNumber = request.body.orderNumber;
  order.name = request.body.name;
  order.contactNumber = request.body.contactNumber;
  order.address = request.body.address;
  order.subTotal = request.body.subTotal;
  order.discount = request.body.discount;
  order.tax = request.body.tax;
  order.deliveryCharge = request.body.deliveryCharge;
  //   order.items = request.body.items;
  const currentDateTime = new Date()
    .toISOString()
    .slice(0, 19)
    .replace("T", " ");

  let items = request.body.items;

  pool.getConnection((error: any, connection: Connection) => {
    if (error) {
      connection.destroy();
      response.status(500).send("Connection error");
    }

    connection.query(
      "INSERT INTO order_details (OrderNumber, Name, ContactNumber, Address, SubTotal, Discount, Tax, DeliveryCharge, AddedDate) VALUES (?, ? , ? , ?, ?, ?,?, ?, ?) ",
      [
        order.orderNumber,
        order.name,
        order.contactNumber,
        order.address,
        order.subTotal,
        order.discount,
        order.tax,
        order.deliveryCharge,
        currentDateTime,
      ],
      (error: any, result: any) => {
        if (error) {
          connection.destroy();
          return response.status(500).send("Error while executing query.");
        }

        const orderDetailsId = result.insertId;

        connection.query(
          "INSERT INTO order_items (OrderId, ItemId, Quantity, AddedDate) VALUES ?",
          [
            items?.map((item: Item) => [
              orderDetailsId,
              item.itemId,
              item.quantity,
              currentDateTime,
            ]),
          ],
          (error: any, result: any) => {
            if (error) {
              connection.destroy();
              return response.status(500).send("Error while executing query.");
            }
            response.status(200).send("Records inserted successfully");
            connection.destroy();
          }
        );
      }
    );
  });
});

export default orderRouter;
