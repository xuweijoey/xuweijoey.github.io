
$(document).ready(function() {
  //resize page height as same as window height
    $(window).resize(function() {
    $('.boxSize').height($(window).height() );
    
    $('.boxSize1').height($(window).height()+200);
    });

    $(window).trigger('resize');

     
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
  $("#part2_box").animate({fontSize: "24px", opacity:1, width:"300px", marginTop:"300px"}, 1000);

},
  function(){
    $("#part2_box").stop().animate({fontSize:"12px", opacity:0,width:"10%", marginTop:"400px"}, 500);
  });

// hover function example

$("#part4").mouseover(function(e){
    $(this).fadeOut(2000);
});

// from and get submitted result

$("#form-submit").click(function(e){

       e.preventDefault();//prevent the "submit" function
      
      $("#myForm").fadeOut();
      $("#name-result").text( $("#user-name").val());
       setTimeout(function(){
      $("#summary").fadeIn();
      }, 400); 


     });


    $(".result"). css("height",function(){$("#part6").height();
  });
    
    //result 1
    $("#result1").click(function(e){

       e.preventDefault();
       $("#formBt").fadeOut();
       $('.boxSize1').height($(window).height());
    
       $("#part7").css("display","block");//show part7
       $("#part7").animate({opacity:1},1000);//fade in effect
   });
    //result 2
   $("#result2").click(function(e){
       e.preventDefault();
       $("#formBt").fadeOut();
       $("#part8").css("display","block");//show part8
       $("#part8").animate({opacity:1},1000);//fade in effect
   });

   //result 3
   $("#result3").click(function(e){
       e.preventDefault();
       $("#formBt").fadeOut();
       $("#part9").css("display","block");//show part9
       $("#part9").animate({opacity:1},1000);//fade in effect
   });//next time use array~

 

  $('#part7').click(function () {
    $('.boxText').animate({opacity:0.8});
  $('.boxText').toggleClass('box-rotate');

});

//part3 background video
$('#part3').videoBG({
    mp4:'assets/christmas_snow.mp4',
    ogv:'assets/christmas_snow.ogv',
    webm:'assets/christmas_snow.webm',
    poster:'assets/christmas_snow.jpg',
    scale:true,
    zIndex:0,
    fullscreen:true,
  });


});//end of js







