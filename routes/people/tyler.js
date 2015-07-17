
var express = require('express');
var router = express.Router();
var path = require("path");

//remove me soon
router.use('/posts', require(path.resolve("./lib/aggregatoremulator"))("./people/tyler/devnotes.json"));

router.use("/devnotes", require(path.resolve("./people/tyler/aggregators/devnotes")));

router.get('/', function(req, res, next) {
  res.sendFile(path.resolve("./people/tyler/home.json"));
});


module.exports = router;
