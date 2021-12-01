require("dotenv").config();
const config = {};

config.development = {
  name: "development",
  httpPort: 8080,
  httpsPort: 8081,
  database: "mongodb://user:film-1234@cluster0-shard-00-00.h81bv.mongodb.net:27017,cluster0-shard-00-01.h81bv.mongodb.net:27017,cluster0-shard-00-02.h81bv.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-143sjf-shard-0&authSource=admin&retryWrites=true&w=majority",
  secret: "film-1234",
};

config.production = {
  name: "production",
  httpPort: 8080,
  httpsPort: 443,
  database: process.env.DATABASE,
  secret: process.env.SECRET,
};

// Change before deploying
const envToExport = config.production;

module.exports = envToExport;
