// import Sequelize
const Sequelize = require("sequelize");
// require .env for node
require("dotenv").config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      // avoid resolving 'localhost' to 127.0.0.1
      host: "127.0.0.1",
      dialect: "mysql",
      port: 3306,
    }
  );
}

module.exports = sequelize;
