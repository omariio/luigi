
// This aggregator stores personal API links in the form of urls to those APIs.
// It doesn't store any other data.

// This aggregator verfies that
// - the resource referred to by the url is JSON
// - the json contains a firstname and lastname field


var express = require('express');
var path = require('path');
var rest = require(path.resolve('./lib/rest'));
var models = require(path.resolve('./lib/models'));

var router = express.Router();

/* GET all registered people */
router.get('/', function(req, res, next) {
  models.People.find({}, function(err, people){
    res.send(people);
  });
});

router.post('/register', function(req, res) {

  if(!req.body.url){
    res.send("no param 'url' provided");
    return;
  }

  try{
    rest.getJSON(req.body.url, function(err, result){
      if(err || !result){
        res.send(err);
        return
      }

      if(! result.firstname || !result.lastname){
        res.send("provided resource did not have 'firstname' or 'lastname' fields");
        return;
      }

      // Check if entry with that url already exists in db
      models.People.findOne({url:req.body.url}, function(err, dbperson){
        if(dbperson){
          res.send("API already registered");
          return;
        }

        var person = new models.People({url:req.body.url, time:new Date()});
        person.save(function(err, obj){
          if(err) return res.send(err);
          res.send("Registration successful");
        });
      });

    });
  }
  catch(e){
    //I want this to work, but alas it does not.
    //res.send(e);
    res.send("bad URL provided");
  }
});

module.exports = router;
