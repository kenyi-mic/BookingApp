import express from "express";
import dotenv from "dotenv";
const app = express();
const port = process.env.PORT || 8800;
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_KEY);
  } catch (error) {
    throw error;
  }
};

app.listen(port, () => {
  connect();
  console.log("Connected to backend at port: ", port);
});
