if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

module.exports = {
  PORT: process.env.PORT,
  APPLICATION_NAME: process.env.APPLICATION_NAME,
  JWT_SECRET: process.env.JWT_SECRET,
  CACHE_KEY: process.env.CACHE_KEY,
  SWAGGER_PATH: `../config/swagger/${process.env.SWAGGER_DOC}.json`,
  MYSQL_DATA_CONNECTION: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    multipleStatements: true
  },
  PROCEDURES: require("./procedures")
};