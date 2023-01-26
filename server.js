const express = require("express");
const cors = require("cors");
const { connect } = require("./common/config/db");
const { userRouter } = require("./routes/userRoute");
const { authRouter } = require("./routes/authRoute");
const { categoryRouter } = require("./routes/categoryRoute");
// require("dotenv").config();

const app = express();
const port = process.env.PORT || 1111;

app.use(cors());
app.use(express.json());

connect();

app.use(authRouter);
app.use(userRouter);
app.use(categoryRouter);

app.get("/", (req, res) => {
  res.send("hi");
});

app.listen(port, () => {
  console.log("running at", port);
});
