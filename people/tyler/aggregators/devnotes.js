
// This is my personal devnotes aggregator.  I made it to aggregate my notes from development of selfnet.
// This collection will be served from an endpoint belonging to me, and in theory only I should be able to
// add data here, probably via ssh key.  Since this restriction is obviously possible, it's low priority to implement,
// and as a result this API is totally open to anyone with some basic knowledge of curl, so if that's you I humbly
// request you don't make my life any harder than it needs to be.

var express = require('express');
var path = require('path');
var rest = require(path.resolve('./lib/rest'));
// var models = require(path.resolve('./lib/models'));
var mongoose = require('mongoose');

var router = express.Router();

var devnotesSchema = new mongoose.Schema({text:String, time:Date}, {strict:true});
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

  var note = new devnotesModel({text:req.body.text, time:new Date()});
  note.save(function(err, obj) {
    if(err){
      res.send(err);
      return;
    }
    res.send("Success: " + obj);
  });
});

module.exports = router;
