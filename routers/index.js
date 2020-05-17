//the index router. This is the only one we need for this project 


const express=require('express');
const router= express.Router();
const homeController = require('../controllers/home_controller');

//redirects all get request to domain/ to the home_controller
router.get('/', homeController.home);


module.exports= router;