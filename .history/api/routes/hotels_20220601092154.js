import express from "express";
import {
  createHotels,
  deleteHotel,
  getHotels,
  updatedHotel,
} from "../handlers/hotels.js";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/Error.js";

const router = express.Router();
//CREATE
router.post("/", createHotels);
//UPDATE
router.put("/:id", updatedHotel);

//DELETE
router.delete("/:id", deleteHotel);

//GET
router.get("/:id", getHotel);
//GET ALL
router.get("/", getHotels);

export default router;
