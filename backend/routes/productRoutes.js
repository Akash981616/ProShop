import express from "express";
import { getProducts, getProductsById } from "../controllers/productController.js";

const router = express.Router();

//@description  fectsh all products
//@route GET/api/products
//@access Public 
router.route("/").get(getProducts)
router.route("/:id").get(getProductsById)
//@description  fectsh single products
//@route GET/api/products/:id
//@access Public 

export default router;
