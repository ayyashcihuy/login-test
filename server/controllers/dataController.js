const axios = require("axios");
const Redis = require("ioredis");
const redis = new Redis();
const DEFAULT_EXPIRATION = 60;

class DataSaver {
  static getData(req, res, next) {
    let response = {};
    redis.get("data").then((value) => {
      if (value) {
        res.status(200).json(JSON.parse(value));
      } else {
        axios({
          method: "GET",
          url: "https://pokeapi.co/api/v2/pokemon?limit=20&offset=20%22",
        })
          .then(({ data }) => {
            response = JSON.stringify(data);
            return redis.setex("data", 60, response);
          })
          .then(() => {
            res.status(200).json(response);
            redis.expire("data", 10);
          })
          .catch((err) => {
            res.status(404).json(err);
          });
      }
    });
    redis.expire("data", 10);
  }

  static RedisRefresher(req, res, next) {
    res.status(200).json({ message: "Data di Redis telah dibersihkan" });
    return redis.flushall;
  }

  static getDataAsync(req, res, next) {
    const albumId = req.query.albumId;
    redis.get("photos", async (err, photos) => {
      if (err) res.status(500).json("Samtingwong");
      if (photos !== null) {
        return res.status(400).json(JSON.parse(photos));
      } else {
        const { data } = await axios(
          "https://jsonplaceholder.typicode.com/photos",
          { params: { albumId } }
        );
        redis.setex("photos", DEFAULT_EXPIRATION, JSON.stringify(data));
        return res.status(400).json(data);
      }
    });
  }
}

module.exports = DataSaver;
