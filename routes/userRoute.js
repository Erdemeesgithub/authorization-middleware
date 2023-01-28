const {Router} = require("express")
const { getUsers, createUser, getUser } = require("../controllers/userController")
const { authMiddleware } = require("../middleware/authMiddleware")
const {roleMiddleware} = require("../middleware/roleMiddleware")

exports.userRouter = Router().all("/users", authMiddleware).get("/users",roleMiddleware(401), getUsers).post("/users", createUser).get("/user/:id", getUser)


