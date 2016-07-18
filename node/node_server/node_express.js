var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World! Here i am');
});

app.get('/goodbye', function (req, res) {
  res.send('Goodbye World!');
});


app.get('/thankyou', function (req, res) {
  var responseTX="";
  responseTX+= "nice World!";
  responseTX+= "<img src='https://www.nasa.gov/sites/default/files/styles/image_card_4x3_ratio/public/thumbnails/image/leisa_christmas_false_color.png?itok=Jxf0IlS4'>";

  res.send(responseTX);
  console.log('Example app listening on port 3000!');//USE CONSOLE DEBUGGING
  
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');//USE CONSOLE DEBUGGING
});