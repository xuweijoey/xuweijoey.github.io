var express = require('express');
var app = express();
var http = require('http').Server(app);// call founction server run app
var io = require('socket.io')(http);//io using http
var chatArchive=[];// archive array
var request=require('request');


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
    // search the last word in sportify and get 
    var allWords= msg.text.split("");
    var lastWord=allWords.length-1;
    // check request node, request is the similar function as ajax;
    request("https://api.spotify.com/v1/search?q=track:" + lastWord + "&type=track", function(err, resp, body) {
      body = JSON.parse(body);//*************very important to see the json object files

      console.log(body);

      if( body.tracks.items.length == 0 )
      {
        msg.username = "Chat Bot";
        msg.text = "Sorry, no tracks with the word " + lastWord + " in them.";
        io.emit("chat message", msg);
        chat.push(msg);
      }else{
        var randomTrackNumber = Math.floor(Math.random() * body.tracks.items.length);
        var randomTrack = body.tracks.items[randomTrackNumber];
     

        msg.text = msg.text + " <a href='" + randomTrack.external_urls.spotify + "'>"+ randomTrack.name +"</a> by " + randomTrack.artists[0].name;
        io.emit("chat message", msg);
        chatArchive.push(msg);
      }

    });//end of request
// start request gif
    

///////////// with out search API founction but send back and save the founction
		// chatArchive.push(msg);//push all message to the array
		// io.emit("chat message", msg);
  });//end of socket on chat message

 


  socket.on("emojiShow", function(iim){
    var KTurl;
    console.log(iim);
     request("http://api.giphy.com/v1/stickers/search?q="+iim+"&limit=5&api_key=dc6zaTOxFJmzC", function(err, resp, body) {
       body = JSON.parse(body);//*************very important to see the json object files
      console.log(body.data[0].id);
      KTurl=body.data[0].id+".gif";
    //   KTurl=[data[0].url, data[1].url,data[2].url,data[3].url,data[4].url];
    //   console.log(KTurl);
 });//end of request
    //chatArchive.push(msg);//push all message to the array
  io.emit("emojiShow", KTurl);
  });//socket on

});// check, when client try to connect the app give a massage //end of io on



app.get('/get_archive', function(req, res) {
  res.send(chatArchive);
});


// app.use(express.static('public'));
// app.get('/chat', function(req,res){
//   res.sendFile(__dirname + '/chat_client.html');
// });


http.listen(3000, function () {
  console.log('Example app listening on port 3000!');//USE CONSOLE DEBUGGING
});
