import express from "express";
import { createHotels } from "../handlers/hotels.js";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/Error.js";

const router = express.Router();
//CREATE
router.post("/", createHotels);
//UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel has been deleted!");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//GET
router.get("/:id", async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
//GET ALL
router.get("/", async (req, res, next) => {
  const failed = true;

  if (failed) return next(createError(404, "Not Found!"));
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (err) {
    next(err);
  }
});

export default router;
