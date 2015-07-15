var express = require('express');
var router = express.Router();
var path = require("path");


/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("before");
  res.sendFile(path.resolve('./clients/index.html'));
  console.log("after");

});

module.exports = router;
