const mongoose = require("mongoose");
const CONNECTION_URI =
  process.env.MONGODB_URI || "mongodb://localhost/todo_development";
require("dotenv").config();

mongoose.connect(CONNECTION_URI, { useMongoClient: true });

const db = mongoose.connection;

//Error message
db.on("error", console.error.bind(console, "DB-connection----->FAILURE"));

//Success message
db.once("open", function () {
  console.log("DB-connection----->SUCCESS");
});

//exporting the connection for external use
module.exports = db;
