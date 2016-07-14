
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

$("#part2").mouseenter(function(){
$("#blood").css("opacity", "1");
 });

$( "#part3" ).mouseenter(function() {
  $( "#block" ).animate({
    width: "200px",//pb
    
    marginLeft: "0.6in",
    fontSize: "40px",
    
  }, 1500 );
});

$( "#part4" ).mouseenter(function() {
  $( "#block1" ).animate({
    opacity:1,
  }, 1500 );
});

/*
$("p").hover(function(){
  $("p").animate({fontSize: "20px"}, 2000);
},
  function(){
    $("p").stop().animate({fontSize:"12px"});
  });


$("p").hover(function(){
  $("p").animate({fontSize: "20px"}, 2000);
},
  function(){
    $("p").stop().animate({fontSize:"12px"});
  });
// hover function example
*/


$("#form-submit").click(function(e){

       e.preventDefault();//prevent the "submit" function
      
      $("#myForm").fadeOut();
      $("#name-result").text( $("#user-name").val());
       setTimeout(function(){
      $("#summary").fadeIn();
      }, 400); 


     });








});//end of js







