//collection of links for the routes for each individual person

var express = require('express');
var router = express.Router();
var path = require("path");

/* GET home page. */

router.use("/tyler", require("./people/tyler"));
//router.use("mike", require("./people/mike")) // keep doing these to add people's route files

module.exports = router;
