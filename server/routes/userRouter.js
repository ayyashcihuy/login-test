const userRouter = require("express").Router();

userRouter.get("/", (req, res) => {
  res.send("Ahlan Dunia");
});

module.exports = userRouter;
