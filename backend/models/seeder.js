import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "../data/users.js";
import products from "../data/products.js";
import User from "./userModels.js";
import Product from "./productModels.js";
import Order from "./orderModels.js";
import connectDB from "../config/db.js";
connectDB();
const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id
     
    const sampleProducts = products.map((items) => {
      return { ...items, user: adminUser };
    });
    await Product.insertMany(sampleProducts);
    console.log("data Imported".green.inverse);
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};
const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log("Data destroyed".red.inverse);
    process.exit();
  } catch (error) {
    console.log.error(`${error}`.red.inverse);
    process.exit(1);
  }
};
if (process.argv[2] === "-d") destroyData();
else {
  importData();
}
