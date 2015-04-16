$(document)
	.on('click', '.js-header-toggle', function(e){
		$('header').toggleClass('open');
		e.preventDefault();
	}).on('click', function(e){
		//if any click was not in the header, close it!
		if($(e.target).closest('.js-header').length==0) {
			$('.js-header').removeClass('open');
		}
	});