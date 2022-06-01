import express, { application } from "express";
import { register } from "../handlers/auth.js";

const router = express.Router();

router.post("/register", register);

export default router;
