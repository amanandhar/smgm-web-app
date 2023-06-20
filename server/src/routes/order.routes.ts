import { Router, Request, Response } from "express";
import mysql, { Connection } from "mysql";
import { Item } from "../models/item.model";
import { Order } from "../models/order.model";
const orderRouter = Router();

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
      response.sendStatus(500).send("Connection error");
    }

    connection.query(
      "SELECT OrderNumberDisplay, Name, ContactNumber, Address, SubTotal, Discount, Tax, DeliveryCharge, CreatedDate " +
        "FROM " +
        process.env.TABLE_ORDER_DETAIL +
        " " +
        "WHERE 1 = 1 " +
        "AND IsSync = " +
        0,
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

orderRouter.get("/max-order-number", (request: Request, response: Response) => {
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
      "SELECT MAX(OrderNumber) AS max_order_number " +
        process.env.TABLE_ORDER_DETAIL +
        " ",
      function (error: any, results: any) {
        if (error) {
          connection.destroy();
          return response.status(500).send("Error while executing query");
        }

        const maxOrderNumber = results[0].max_order_number;
        response.send({ maxOrderNumber: maxOrderNumber });
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
  order.orderNumberDisplay = request.body.orderNumberDisplay;
  order.name = request.body.name;
  order.contactNumber = request.body.contactNumber;
  order.address = request.body.address;
  order.subTotal = request.body.subTotal;
  order.discount = request.body.discount;
  order.tax = request.body.tax;
  order.deliveryCharge = request.body.deliveryCharge;
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
      "INSERT INTO " +
        process.env.TABLE_ORDER_DETAIL +
        " (OrderNumber, OrderNumberDisplay, Name, ContactNumber, Address, SubTotal, Discount, Tax, DeliveryCharge, CreatedDate) " +
        "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ",
      [
        order.orderNumber,
        order.orderNumberDisplay,
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
          "INSERT INTO " +
            process.env.TABLE_ORDER_DETAIL +
            " (OrderId, ItemId, Price, Quantity, AddedDate) VALUES ?",
          [
            items?.map((item: Item) => [
              orderDetailsId,
              item.itemId,
              item.price,
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

orderRouter.put("/synchronize", (request: Request, response: Response) => {
  const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    connectionLimit: Number(process.env.CONNECTION_LIMIT || 0),
    multipleStatements: true,
  });

  const orderNumbers = request.body;
  if (orderNumbers.length === 0) {
    response.sendStatus(200);
  } else {
    pool.getConnection((error: any, connection: Connection) => {
      if (error) {
        connection.destroy();
        response.status(500).send("Connection error");
      }

      connection.query(
        "UPDATE " +
          process.env.TABLE_ORDER_DETAIL +
          " SET IsSync = 1 WHERE OrderNumberDisplay IN (?)",
        [orderNumbers],
        (error: any, result: any) => {
          if (error) {
            connection.destroy();
            return response.status(500).send("Error while executing query.");
          }

          response.sendStatus(200);
          connection.destroy();
        }
      );
    });
  }
});

export default orderRouter;
