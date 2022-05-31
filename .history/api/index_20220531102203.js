import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import roomsRoute from "./routes/rooms.js";
import hotelsRoute from "./routes/hotels.js";
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

//MIDDLE WIRE
app.use(express.json);

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/hotels", hotelsRoute);

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
