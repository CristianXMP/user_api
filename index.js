const mySQL = require("mysql");
const container = require("./src/startup/container");
const server = container.resolve("app");
const { MYSQL_DATA_CONNECTION } = container.resolve("config");

db = mySQL.createConnection(MYSQL_DATA_CONNECTION);

db.connect(function(err){
  if (err)
    console.log(err);
  else
    server.start();
});