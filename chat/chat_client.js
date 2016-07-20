$(document).ready(function(){
	var socket= io("http://localhost:3000");
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
    	{$("#chat-log").append("<div style='color:#999999'>this is history</div>");}

	}//function
});//ajax
}//else make later

});//chat_start



$("#chat-form").submit(function(){
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
    return false;// on flash

});//end of chat-form

socket.on("chat message", function(msg){
	if(msg.username==$("#chat-name").val()){
		$("#chat-log ul").append("<li class='me'><b>"+ msg.username + ":</b>"+ msg.text + "</li>");
    }else{
    	$("#chat-log ul").append("<li class='you'><b>"+ msg.username + ":</b>"+ msg.text + "</li>");
    }
	
});





});//end of ready