const {Router} = require("express")
const { getUsers, createUser } = require("../controllers/userController")
const { authMiddleware } = require("../middleware/authMiddleware")

exports.userRouter = Router().all("/users", authMiddleware).get("/users", getUsers).post("/users", createUser)


