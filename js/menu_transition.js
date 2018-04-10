//by victor García Zarco

//Modify opacity of the menu
$(document).scroll(function() {

	var scrollTop = $(window).scrollTop();
	var limit = $('#home').height();

	if(scrollTop < limit){
		var rgba = "rgba(35,38,45," + scrollTop/limit + ")";
		var textOpacity = 1-3*(scrollTop/limit);
		$('#navigation').css("background-color", rgba);
		$('#intro h1').css("opacity", textOpacity);
	}else{
		$('#navigation').css("background-color", 'rgba(35,38,45,1)');
	}
});