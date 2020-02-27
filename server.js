//jshint esversion:6
const express = require('express');
const bmiCalculator = express();
const bodyParser = require('body-parser');

bmiCalculator.use(bodyParser.urlencoded({ extended: false }));

bmiCalculator.get('/', function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

bmiCalculator.post("/",function(req, res) {
var weight = parseFloat(req.body.weight);
var height = parseFloat(req.body.height);

var result = weight / height;

res.send("Your BMI is " + Math.round(result));
});

bmiCalculator.listen(3000);
