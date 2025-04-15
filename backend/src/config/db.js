import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const letsConnect = await mongoose.connect("mongodb+srv://nikhil:nikhil@cluster0.1urrif2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
      useNewUrlParser: true,
    });
    console.log(`MongoDB is connected`);
  } catch (err) {
    console.log(`MongoDB Error : ${err.message}`);
    process.exit();
  }
};