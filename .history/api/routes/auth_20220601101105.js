import express, { application } from "express";

const router = express.Router();

router.get("/register", register);

export default router;
