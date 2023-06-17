import { Router, Request, Response } from "express";
import mysql, { Connection } from "mysql";
const itemRouter = Router();

itemRouter.get("/", (request: Request, response: Response) => {
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
      "SELECT i.Id, i.Name, i.Code, ic.Name as Category, i.Price, i.ImagePath FROM item i INNER JOIN item_category ic on i.CategoryId = ic.Id ORDER BY i.Id",
      function (error: any, rows: any) {
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
      }
    );
  });
});

export default itemRouter;
