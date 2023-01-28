const { Router } = require("express");
const { authMiddleware } = require("../middleware/authMiddleware");
const {
  getCategories,
  createCategory,
} = require("../controllers/categoryController");

const {roleMiddleware} = require("../middleware/roleMiddleware")

exports.categoryRouter = Router()
  .all("/categories", authMiddleware)
  .get("/categories", getCategories)
  .post("/categories", roleMiddleware ,createCategory);
