// This is a utility file that turns JSON in a specific format into a series of routes to emulate aggregators.
// The argument taken is a string containing the relative URL of a JSON file, and that JSON file must have an
// "array" field with the data in it.
//
// Meta Note: The specific JSON format is just to match the current standard of aggregators returning arrays
// which we may or may not want to keep but it seems like the best thing at this point in time.

var express = require('express');
var router = express.Router();
var path = require("path");
var fs = require("fs");


module.exports = function(arrayResource) {

  try{
    var resource = fs.readFileSync(path.resolve(arrayResource));
  }
  catch(e){
    console.error("splitter.js: no file found at " + path.resolve(arrayResource));
    process.exit();
  }
  try{
    var resource = JSON.parse(resource);
  }
  catch(e){
    console.error("splitter.js: file at " + path.resolve(arrayResource) + " is not valid JSON.");
    process.exit();
  }

  if(!resource.array || !Array.isArray(resource.array)){
    console.error("splitter.js: resource at " + path.resolve(arrayResource) + " must be an object with an array in the 'array' field.");
    process.exit();
  }

  for(var i = 0; i < resource.array.length; ++i){
    router.get("/" + i, function(req, res, next){
      res.send(resource.array[i]);
    });
  }

  router.get('/', function(req, res, next) {
    res.send(resource.array);
  });

  return router;
}
