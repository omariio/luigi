// logic for the client/people routes

var express = require('express');
var router = express.Router();
var path = require("path");

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.sendFile(path.resolve('./clients/index.html'));
  res.send("clients");
});

module.exports = router;
