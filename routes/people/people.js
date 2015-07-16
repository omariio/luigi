//collection of links for the routes for each individual person

var express = require('express');
var router = express.Router();
var path = require("path");

/* GET home page. */


router.use("/tyler", require("./people/tyler"));

router.get("/", function(req, res){
  res.send("apis live here");
});

module.exports = router;
