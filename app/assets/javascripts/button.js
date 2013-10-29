$(document).ready(function(){

	var text = $('.page-header');
	
	$(".btn-group").on('click', '#left', function(){
		$(text).removeClass();
		$(text).addClass("text-left");
	});
	
	$('.btn-group').on('click', '#center', function(){
		$(text).removeClass();
		$(text).addClass("text-center");
	});

	$('.btn-group').on('click', '#right', function(){
		$(text).removeClass();
		$(text).addClass("text-right");
	});

	$('button').filter('.close').click(function(){
		$('.well').remove();
	});
});