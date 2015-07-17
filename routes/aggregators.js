var express = require('express');
var router = express.Router();
var path = require("path");

//Code translation:
//All requests that pass through this file (so all aggregator) are given a response with the
//Access-Control-Allow-Origin heading
//
//note to self:
//Learn why this is bad
router.use('/', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

router.use("/people", require(path.resolve("./aggregators/people")));
router.use("/devnotes", require(path.resolve("./aggregators/devnotes")));

router.get("/", function(req, res){
  res.send("aggregators routes")
});

module.exports = router;
