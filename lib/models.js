var express = require('express');
var mongoose = require('mongoose');

var peopleSchema = new mongoose.Schema({url:String, time:Date}, {strict:true});
exports.People = mongoose.model("People", peopleSchema);
