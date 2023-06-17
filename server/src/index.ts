import express from "express";
import { Request, Response } from "express";
import mysql, { Connection } from "mysql";
import dotenv from "dotenv";
import routes from "./routes";
dotenv.config();

const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(routes);

app.get("/", (req: Request, res: Response) => {
  res.send("Well done!");
});

// app.get("/:id", (req: Request, res: Response) => {
//   res.send("Id is " + req.params.id);
// });

// app.get("/:id", (req: Request, res: Response) => {
//   res.send("Id is " + req.params.id);
// });

// app.get("/a/database", (req: Request, res: Response) => {
//   let pool = mysql.createPool({
//     host: process.env.HOST,
//     user: process.env.USER,
//     password: process.env.PASSWORD,
//     database: process.env.DATABASE,
//     connectionLimit: Number(process.env.CONNECTION_LIMIT || 0),
//     multipleStatements: true,
//   });

//   pool.getConnection((error: any, connection: Connection) => {
//     if (error) {
//       console.log("Error getting connection", error);
//       res.send({
//         success: false,
//         statusCode: 500,
//         message: "Connection error",
//       });
//     }

//     connection.query("SELECT * FROM Item", function (error: any, rows: any) {
//       if (error) {
//         connection.destroy();
//         return res.send({
//           sucess: false,
//           statusCode: 400,
//         });
//       }

//       res.send(rows);
//       connection.destroy();
//     });
//   });
// });

// app.post("/", (req: Request, res: Response) => {
//   res.send({
//     data: req.body,
//   });
// });

app.listen(process.env.PORT, () => {
  console.log("The application is listening on port " + process.env.PORT);
});
