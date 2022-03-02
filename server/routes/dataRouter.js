const DataSaver = require("../controllers/dataController");
const dataRouter = require("express").Router();

dataRouter.get("/pokemon", DataSaver.getData);
dataRouter.get("/clean", DataSaver.RedisRefresher);

module.exports = dataRouter;
