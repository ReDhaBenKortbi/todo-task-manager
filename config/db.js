import mongoose from "mongoose";

export async function connectToDatabase() {
  const URI = process.env.MONGO_URI;
  return await mongoose.connect(URI);
}
