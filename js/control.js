
$(document).ready(function() {


     
     $("#summary").hide();
     /*$("#content").fadeOut();

    setTimeout(function(){
 	$("#content").text("is dooooooooooooooooope");
    }, 400);
 
    $("#content").fadeIn();

    $("#content").mouseenter(function(){
 	$(this).css("border", "solid 2px #990033");
    });

    $("#content").mouseleave(function(){
 	$(this).css("border", "none");
    });*/


//$("#content").append( "<p>Test</p>" );



/*
$(function(){

    var explore = $("body").innerHeight();
    console.log(explore);

    $( window ).on("resize", function() {
       explore = $('body').css("height");
       console.log(explore);
    });

});*/

/*$(function(){$( window ).on("resize", function(){theightWithScrollBars = $(window).height();});*/

$("#part2_box").mouseenter(function(){
$("#blood").css("opacity", "1");
 });

$( "#part3" ).mouseenter(function() {
  $( "#block" ).animate({
    width: "200px",//pb
    
    marginLeft: "0.6in",
    fontSize: "40px",
    
  }, 1500 );
});




$("#part2").hover(function(){
  $("#part2_box").animate({fontSize: "24px", opacity:1, width:"300px", marginTop:"300px"}, 2000);

},
  function(){
    $("#part2_box").stop().animate({fontSize:"12px", opacity:0,width:"10%", marginTop:"400px"}, 500);
  });

// hover function example

$("#part4").mouseover(function(e){
    $(this).animate({opacity:0.5},400);
});



$("#form-submit").click(function(e){

       e.preventDefault();//prevent the "submit" function
      
      $("#myForm").fadeOut();
      $("#name-result").text( $("#user-name").val());
       setTimeout(function(){
      $("#summary").fadeIn();
      }, 400); 


     });








});//end of js







