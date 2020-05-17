//APP REQUIREMENTS

//imprting express
const express = require("express");
//intializing app
const app = express();
//initializing router
const router = express.Router();
//imprting the database
//port initialized to 8000
const port = 8000;
//importing  the database
const db = require("./config/mongoose");
//redirection to the routers folder
app.use("/", require("./routers"));

//setting up ejs view engine
app.set("view engine", "ejs");
app.set("views", "./views");
//setting up the static file directory
app.use(express.static("assets"));
//listen on the port
app.listen(port, function (err) {
  if (err) {
    console.log(`Error running server: ${err}`);
  } else {
    console.log(`Server port number-->:${port}`);
  }
});
