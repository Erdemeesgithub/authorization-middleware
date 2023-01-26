const { Router } = require("express");
const { authMiddleware } = require("../middleware/authMiddleware");
const {
  getCategory,
  createCategory,
} = require("../controllers/categoryController");

const {roleMiddleware} = require("../middleware/roleMiddleware")

exports.categoryRouter = Router()
  .all("/categories", authMiddleware)
  .get("/categories", getCategory)
  .post("/categories", roleMiddleware ,createCategory);
