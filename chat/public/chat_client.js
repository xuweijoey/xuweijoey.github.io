$(document).ready(function(){
	var socket= io("http://localhost:3000");
//load emoji
$.ajax({
  url:"http://localhost:3000/emoji",
  success: function(data){
  for(var i=0; i<14; i++){
  $("#emoji-box").append("<input type='image' value='n0"+i+"' src=http://i.giphy.com/"+ data[i] + " width='40' height='40' id='n0"+i+"'>");
  //console.log(KTurl[i]);
}
      }//function
  });//ajax


$("#chat_start").click(function(){
	console.log($("#chat-name").val());
//check name first
	if($("#chat-name").val() == "")
    {
        alert("have a name first");
        return false;
    }
    else{

	$.ajax({
	url:"http://localhost:3000/get_archive",
	success: function(data){
		$("#chat-log ul li").remove();
		for(var i=0; i<data.length; i++){
			var msg= data[i];
         if(msg.username==$("#chat-name").val()){
		$("#chat-log ul").append("<li class='history1'><b>"+ msg.username + ":</b>"+ msg.text + "</li>");
    }
        else{
    	$("#chat-log ul").append("<li class='history2'><b>"+ msg.username + ":</b>"+ msg.text + "</li>");
    }//else
    }//for
        if (data.length>1) 
    	{$("#chat-log ul").append("<li id='historyLog'>***this is a history***</li>");}

	}//function
});//ajax
}//name text field test else 

});//chat_start



$("#chat-form").submit(function(){
  if($("#chat-name").val() == "")
    {
        alert("have a name first");
        return false;
    }
    else{
	//check name first_doesn't work
	// if($("#chat-name").attr("value") == null)
 //    {
 //        alert("have a name first");
 //        return false;
 //    }
    var messageObject ={};
    messageObject.username = $("#chat-name").val();
    messageObject.text = $("#chat-input").val();
	socket.emit("chat message", messageObject);//refrencing io commend to the server, emit: send message
	$("#chat-input").val("");
}
    return false;// on flash

});//end of chat-form



//**********when I have pics  form emoji-box
//  var valuePic;
// $("#emoji-box input").click(function(){
//     console.log($(this).val());
//     valuePic =$(this).val();
//     });

// $("#emoji-box").submit(function(e){
//     var emoObject ={};
//     emoObject.link = $("#"+valuePic).attr("src");
//     console.log(emoObject.link);
//     //console.log($("#emoji-box").val() );
//     socket.emit("emoji", emoObject);//refrencing io commend to the server, emit: send message
//     $("#emoji-box input").attr("src");
//     return false;// on flash

// });//end of form

// socket.on("emoji", function(iim){
//   $("#chat-log ul").append("<li class='me'><img src="+  iim.link + " width='40' height='40'></li>");
//   console.log(iim.link );
    
// });// end of socket on message
// $("#emoji").click(function(){
//           $("#emoji-box").css("display","block");
//        });// click function
//        $("#close-emoji").click(function(){
//           $("#emoji-box").css("display","none");
//  });// click function
//**********when I have pics  form emoji-box

$("#emoji").click(function(){
          $("form#emoji-box").css("display","block");
          
       });// click function
$("#close-emoji").click(function(){
          $("form#emoji-box").css("display","none");

 });// click function



 var valuePic=0;

$("#emoji-box").submit(function(){
  $("#emoji-box input").unbind().click(function(e){
  valuePic= $(this).attr("src");
  console.log("gif link is "+valuePic);
   socket.emit("emojiLog", valuePic);       
   });    
  
  return false;
  });

     
  
 




socket.on("emojiLog", function(valuePic){
  console.log("this is a "+valuePic);
  $("#chat-log").scrollTop($("#chat-log ul").height());
  
$("#chat-log ul").append("<li class='me'><img src="+  valuePic + " width='40' height='40'></li>");
});// end of socket on message

    


socket.on("chat message", function(msg){
  $("#chat-log").scrollTop($("#chat-log ul").height());
	if(msg.username==$("#chat-name").val()){
		$("#chat-log ul").append("<li class='me'><b>"+ msg.username + ":</b>"+ msg.text + "</li>");
    }else{
    	$("#chat-log ul").append("<li class='you'><b>"+ msg.username + ":</b>"+ msg.text + "</li>");
    }

    $(".playTrack").click(function(){
      $("#musicNo").remove();
  console.log("clicked playtrack");
  $("#music").css({right: "0px", opacity:1});
  
   });


});// end of socket on message

//music iframe animation
$("#music").hover(function(){
  $("#music").animate({right: "0px", opacity:1}, 800);

  },
  function(){
    $("#music").stop().animate({right: "-28%", opacity:0.4}, 800);
  });


























});//end of ready


