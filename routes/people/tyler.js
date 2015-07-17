
var express = require('express');
var router = express.Router();
var path = require("path");

/* GET home page. */

router.use('/posts', require(path.resolve("./lib/aggregatoremulator"))("./json/tyler/devnotes.json"));

router.get('/', function(req, res, next) {
  res.sendFile(path.resolve("./json/tyler/home.json"));
});

module.exports = router;
