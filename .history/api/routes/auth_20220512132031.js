import express from "express";
const app = express();

app.send("/", (req, res) => {
  res.send("Here is the authentication page!");
});
