//the index router. This is the only one we need for this project

const express = require("express");
const app = express();
const router = express.Router();
const homeController = require("../controllers/home_controller");
//parsing middlewares
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//redirects all get request to domain/ to the home_controller
router.get("/", homeController.home);
//rediects requests to complete a task
router.get("/strike-off/:id", homeController.strikeOne);

//redirects requests to delete all requests
router.get("/delete-all", homeController.deleteAll);

//redirects requests for task creation
router.post("/create", homeController.create);

module.exports = router;
