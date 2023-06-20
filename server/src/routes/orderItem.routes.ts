import { Router, Request, Response } from "express";
import mysql, { Connection } from "mysql";

const orderItemRouter = Router();

orderItemRouter.get(
  "/order-number/:orderNumber",
  (request: Request, response: Response) => {
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
        "SELECT OrderNumberDisplay, ItemId, Price, Quantity, CreatedDate " +
          "FROM " +
          process.env.TABLE_ORDER_ITEM +
          " WHERE OrderNumberDisplay = " +
          request.params.orderNumber,
        (error: any, rows: any) => {
          if (error) {
            connection.destroy();
            return response.status(500).send("Error while executing query");
          }

          response.status(200).json(rows);
          connection.destroy();
        }
      );
    });
  }
);

export default orderItemRouter;
