import express, { application } from "express";
import { register } from "../handlers/auth.js";

const router = express.Router();

router.get("/register", register);

export default router;
