const express = require("express");
const router = express.Router();
const {verifyAdmin} = require("../utils/verifyToken.js");

const {
  createHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getHotels,
  countByCity
} = require("../controllers/hotel.js");

//CREATE
router.post("/", verifyAdmin, createHotel);
//UPDATE
router.put("/:id", verifyAdmin, updateHotel);
//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);
//GET
router.get("/find/:id", getHotel);
router.get("/countByCity", countByCity);
// router.get("/countByType", countByType);
//GET ALL

module.exports = router;
