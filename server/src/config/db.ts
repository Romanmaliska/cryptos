import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI!);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (e: unknown) {
    console.log(
      `MongoDB connection failed: ${
        e instanceof Error ? e.message : "Unknown error occured"
      }`
    );

    process.exit(1);
  }
};
export default connectDB;
