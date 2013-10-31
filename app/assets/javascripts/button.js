$(document).ready(function(){

	var text = $('.page-header');
	var AddRemove = function(classToAdd) {
		$(text).removeClass();
		$(text).addClass(classToAdd);
	};


	$(".btn-group").on('click', '#left', function(){
		AddRemove('text-left');
	});
	
	$('.btn-group').on('click', '#center', function(){
		AddRemove('text-center');
	});

	$('.btn-group').on('click', '#right', function(){
		AddRemove('text-right');
	});

	$('button').filter('.close').click(function(){
		$('.well').remove();
	});
});