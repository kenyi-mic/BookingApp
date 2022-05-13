import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to authentication page!");
});

export default router;
