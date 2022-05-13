import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "routes/auth.js";
const app = express();
const port = process.env.PORT || 8800;
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_KEY);
    console.log("MongoDb connected");
  } catch (error) {
    throw error;
  }
};

//middle wire
app.use("/auth", authRoute);

mongoose.connection.on("disconnected", () => {
  console.log(" Mongo BD Disconnected");
});

mongoose.connection.on("Connected", () => {
  console.log("Mongo Db is connected");
});

app.listen(port, () => {
  connect();
  console.log("Connected to backend at port: ", port);
});
