import express from "express";
import dotenv from "dotenv";
const app = express();
const port = process.env.PORT || 8800;
dotenv.config();

app.listen(port, () => {
  console.log("Connected to backend at port: ", port);
});
