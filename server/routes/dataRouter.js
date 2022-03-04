const DataSaver = require("../controllers/dataController");
const dataRouter = require("express").Router();

dataRouter.get("/pokemon", DataSaver.getData);
dataRouter.get("/clean", DataSaver.RedisRefresher);
dataRouter.get("/photos", DataSaver.getDataAsync);

module.exports = dataRouter;
