$(document).ready(function(){

    
    $.ajax({
            url: "http://localhost:3000/retrieve",            
            success: ajaxHandler
          });// END OF AJAX

	$("#price_up").click(function(e){
     
        $.ajax({
            url: "http://localhost:3000/add",
             success: ajaxHandler
          });// END OF AJAX
    
    });//END OF CLICK

    $("#price_down").click(function(e){
      
     
        $.ajax({
            url: "http://localhost:3000/subtract",
            success: ajaxHandler
          });// END OF AJAX
    
    });//END OF CLICK
    });// END OF  READY function

function ajaxHandler(data)
        {
            console.log(data);

        $("#current_price").text(data)}


