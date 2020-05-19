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
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//setting up ejs view engine
app.set("view engine", "ejs");
app.set("views", "./views");
//setting up the static file directory
app.use(express.static("assets"));

//redirection to the routers folder
app.use("/", require("./routers"));

//listen on the por t
app.listen(port, function (err) {
  if (err) {
    console.log(`Error running server: ${err}`);
  } else {
    console.log(`Server port number-->:${port}`);
  }
});
