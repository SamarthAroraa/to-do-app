const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/todo_development");

const db = mongoose.connection;

//Error message
db.on("error", console.error.bind(console, "DB-connection----->FAILURE"));

//Success message
db.once("open", function () {
  console.log("DB-connection----->SUCCESS");
});

//exporting the connection for external use
module.exports = db;
