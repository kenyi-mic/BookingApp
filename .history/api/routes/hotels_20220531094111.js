import express from "express";

const router = express.Router();
//CREATE
router.get("/", (req, res) => {
  res.send("Welcome to our Hotel Page!");
});

export default router;
