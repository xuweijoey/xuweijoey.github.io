var express = require("express");
var app = express();

var carPrice;
var carColor;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "OPTIONS,HEAD,GET,PUT");
  next();
});

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.get("/set_price", function(req, res){
    console.log(req.query.price);//query= get request from ajax file
    carPrice = req.query.price;
    
    carColor = req.query.color;
    
});

app.get("/retrieve_price", function(req, res){
    res.send("The car price is: " + carPrice + carColor);
    
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});