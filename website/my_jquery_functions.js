$(document).ready(function(){
	$("#tide").click(function(){
		$("#cssmenu").css("background", "#980122");
		 $('html, body').animate({ scrollTop: 0 }, 'slow');
		$("body").css("background-image", 'url("alabamafootball.jpg")');
		$("body").css("background-repeat", "no-repeat");
		$("body").css("background-size", "1300px");
		$("body").css("color", "white");
		$(".tideimages").toggle();
		$(".images").toggle();
		$("p").toggle();
		$("h2").toggle();
		$("h1").toggle();
    });
});