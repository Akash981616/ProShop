import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://akash:jodjodjod@proshop.cbkdn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    });
    console.log(`MongoDB connection successful :${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log("connection failed").red.underline.bold;
    process.exit(1)
  }
};
export default connectDB;
