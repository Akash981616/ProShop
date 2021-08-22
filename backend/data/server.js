import express from "express"
import connectDB from "../config/db.js";
import colors from "colors"
import products from "./products.js"
connectDB();
const app = express();

app.get("/", (req, res) => res.send("app is running"));
app.get("/api/products", (req, res) => res.json(products));
const PORT =process.env.PORT ||5000;
const NODE_ENV=process.env.NODE_ENV
app.listen(
  PORT,
  console.log(`Server is Running in ${PORT} mode on port ${NODE_ENV} `.yellow.bold)
);

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});
