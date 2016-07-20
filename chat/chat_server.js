var express = require('express');
var app = express();
var http = require('http').Server(app);// call founction server run app
var io = require('socket.io')(http);//io using http
var chatArchive=[];// archive array


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "OPTIONS,HEAD,GET,PUT");
  next();
});

app.get('/', function(req, res) {
  res.send('Hello World! Here i am');
});


io.on('connection',function(socket){
	console.log("New Client Connection");
	socket.on("chat message", function(msg){
		console.log(msg);
		chatArchive.push(msg);//push all message to the array
		io.emit("chat message", msg);

	});
});// check, when client try to connect the app give a massage


app.get('/get_archive', function(req, res) {
  res.send(chatArchive);
});

http.listen(3000, function () {
  console.log('Example app listening on port 3000!');//USE CONSOLE DEBUGGING
});
