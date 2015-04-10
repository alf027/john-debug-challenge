$(document).ready(function(){
	$("#tide").click(function(){
		$("#cssmenu").css("background", "#980122");
		$("body").css("background-image", 'url("alabamafootball.jpg")');
		$("body").css("background-size", "1200px");
		$("body").css("color", "white");
		$("#tideimages").toggle();
		$("#images").toggle();
    });
});