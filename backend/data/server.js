import express from "express";
import dotenv from "dotenv";
import connectDB from "../config/db.js";
import { notFount,errorHandler } from "../middleware/errorMiddleware.js";
import router from "../routes/productRoutes.js"


import colors from "colors";

dotenv.config();
connectDB();
const app = express();

app.get("/", (req, res) => {
  res.send("app is running");
});
app.use("/api/products/",router)
app.use(notFount)
app.use(errorHandler) 
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV;
app.listen(
  PORT,
  console.log(
    `Server is Running in ${PORT} mode on port ${NODE_ENV} `.yellow.bold
  )
);



