
// This is a devnotes aggregator with self-reporting for users.  Eventually, this should definitely reflect
// only data that originates from registered user endpoints.  However, self-reporting is okay for now, we can
// add validated users later.

var express = require('express');
var path = require('path');
var rest = require(path.resolve('./lib/rest'));
// var models = require(path.resolve('./lib/models'));
var mongoose = require('mongoose');

var router = express.Router();

var devnotesSchema = new mongoose.Schema({text:String, user:String, time:Date}, {strict:true});
var devnotesModel = mongoose.model("Devnotes", devnotesSchema);

/* GET all registered messages */
router.get('/', function(req, res, next) {
  devnotesModel.find({}, function(err, notes){
    res.send(notes);
  });
});

router.post('/register', function(req, res) {

  if(!req.body.text ){
    res.send("failure: no param 'text' provided");
    return;
  }

  if(typeof req.body.text !== 'string' && ! (myVar instanceof String)){
    res.send("failure: 'text' field is not a string");
    return;
  }

  if(!req.body.user ){
    res.send("failure: no param 'user' provided");
    return;
  }

  if(typeof req.body.user !== 'string' && ! (myVar instanceof String)){
    res.send("failure: 'text' field is not a string");
    return;
  }

  // TODO: verify that thing provided in user is actually a URL
  // TODO: verify that the URL points to a registered user

  var note = new devnotesModel({text:req.body.text, user:req.body.user, time:new Date()});
  note.save(function(err, obj) {
    if(err){
      res.send(err);
      return;
    }
    res.send("Success: " + obj);
  });
});

module.exports = router;
