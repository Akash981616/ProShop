import asyncHandler from "express-async-handler";
import Product from '../models/productModels.js'
//@description  fectsh all products
//@route GET/api/products
//@access Public 
const getProducts=asyncHandler(async(req,res )=>{
    const products =await Product.find({})
    res.json(products)
})
//@description  fectsh single products
//@route GET/api/products/:id
//@access Public 
const getProductsById=asyncHandler(async(req,res )=>{
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404)
      throw new Error("product not found")
    }
  });
  export {getProducts,getProductsById}