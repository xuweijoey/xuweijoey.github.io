$(document).ready(function(){
	$("#summary").hide();

	$("input").focus(function(){
		$(this).css({"background-color":"#00ff00"});
    });
	$("input").blur(function(){
		$(this).css({"background-color":"inherit"});
    });
    $("#user-happy").click(function(){
    	if($(this).is(":checked"))
    	{   $("#smily").text("yes");
    		
    	}else{

            $("#smily").text("3-c");
    	}
    });

    $("#user-contury").change(function(){
    	alert($(this).val());
    });

    $("#form-submit").click(function(e){

    	 e.preventDefault();//prevent the "submit" function
         $("#summary").fadeIn();

    	 $("#name-result").text( $("#user-name").val());
    	 if($("#user-happy").is(":checked")){
    	 	$("#happy-result").text("are");
         }else{
         	$("#happy-result").text("are not");
         }
         var conturyVal= $("#user-contury").val();
         var conturyName= $("#user-contury option[value='"+conturyVal+"']").text();
         $("#contury-result").text(conturyName);
    });

});//end of Jquery


