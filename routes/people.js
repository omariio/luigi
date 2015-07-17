//collection of links for the routes for each individual person

var express = require('express');
var router = express.Router();
var path = require("path");

// ditto to note in aggregator.js
router.use('/', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

router.use("/tyler", require("./people/tyler"));
router.use("/jazzmike", require("./people/jazzmike"));

module.exports = router;
