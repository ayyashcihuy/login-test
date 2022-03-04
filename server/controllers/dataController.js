const axios = require("axios");
const Redis = require("ioredis");
const redis = new Redis();

class DataSaver {
  static getData(req, res, next) {
    let response = {};
    redis.get("data").then((value) => {
      if (value) {
        console.log("Data ini didapatkan dari redis");
        res.status(200).json(JSON.parse(value));
      } else {
        axios({
          method: "GET",
          url: "https://pokeapi.co/api/v2/pokemon?limit=20&offset=20%22",
        })
          .then(({ data }) => {
            response = JSON.stringify(data);
            redis.set("data", response);
          })
          .then(() => {
            console.log(
              "Data ini didapatkan dari Server dan kemudian berhasil disimpan di redis"
            );
            res.status(200).json(response);
            redis.expire("data", 10);
          })
          .catch((err) => {
            console.log("ERROR", err);
            res.status(404).json(err);
          });
      }
    });
    redis.expire("data", 10);
  }

  static RedisRefresher(req, res, next) {
    res.status(200).json({ message: "Data di Redis telah dibersihkan" });
    redis.lpush;
    return redis.del("data");
  }
}

module.exports = DataSaver;
