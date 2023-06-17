"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var routes_1 = __importDefault(require("./routes"));
dotenv_1.default.config();
var app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use(routes_1.default);
app.get("/", function (req, res) {
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
app.listen(process.env.PORT, function () {
    console.log("The application is listening on port " + process.env.PORT);
});
