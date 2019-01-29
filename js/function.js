$(document).ready(function() {
	$("#scroll-icon").click(function() {
	    $([document.documentElement, document.body]).animate({
	        scrollTop: $("#start-intro").offset().top,
	        easing: 'swing'
	    }, 1000);
	});

	$('a[href^="#"]').on('click', function(event) {
	    var target = $(this.getAttribute('href'));
	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').stop().animate({
	            scrollTop: target.offset().top,
	            easing: 'swing'
	        }, 1000);
	    }
	});
});


/*Experimental Code
$(document).ready(function() {
	$('#thalia').mouseover(function(){
		$('#thalia').css({
			'transform': 'translate(50px, 0px)',
			'transition': 'all .6s ease'
		});
	});

	$('.my-rotate').click(function(){
		$(this).css({
			'transform': 'rotate(360deg)',
			'transition': 'all .6s ease'
		});
	})

	var offset = $('#portfolio').offset();
	var top = offset.top;
	var left = offset.left;

	$( '#scroll-icon' ).click(function() {
		$( 'window' ).offset({top: top, left: left});
	});
});*/