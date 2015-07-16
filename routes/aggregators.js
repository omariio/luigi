var express = require('express');
var router = express.Router();
var path = require("path");

router.use("/people", require(path.resolve("./aggregators/people")));

router.get("/", function(req, res){
  res.send("aggregators routes")
});

module.exports = router;
