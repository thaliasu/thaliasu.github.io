$(document).ready(function() {
	//On page load, scroll to top
	$(this).scrollTop(0);

	//Scroll down to About when icon is clicked
	$("#scroll-icon").click(function() {
	    $([document.documentElement, document.body]).animate({
	        scrollTop: $("#main").offset().top,
	        easing: 'swing'
	    }, 1000);
	});

	//Scroll to section when nav link is clicked
	$('a[href^="#"]').on('click', function(event) {
	    var target = $(this.getAttribute('href'));
	    var navHeight = $('nav').outerHeight(true);

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').stop().animate({
	            scrollTop: target.offset().top - 82,
	            easing: 'swing'
	        }, 1000);
	        if($(window).width() <= 632) {
	    		$("nav").toggleClass("mobileIsActive");
	    	}
	    }
	});

	//Scroll to top when welcome nav link is clicked
	$("#welcome-link").click(function() {
	    $([document.documentElement, document.body]).animate({
	        scrollTop: 0,
	        easing: 'swing'
	    }, 1000);
	    if($(window).width() <= 632) {
    		$("nav").toggleClass("mobileIsActive");
    	}
	});

	//Show and hide mobile nav
	$("#nav-btn").click(function(){
		$("nav").toggleClass("mobileIsActive");
	});


	//Show active link on click -- this experimental code doesn't work
	// var linkClicked;
	// $("#0").click(function(){
	// 	linkClicked = 0;
	// });
	// $("#1").click(function(){
	// 	linkClicked = 1;
	// 	$('li').removeClass();
	// 	$(this).addClass('active');
	// });
	// $("#2").click(function(){
	// 	linkClicked = 2;
	// });


	//Controls active li class in nav
	$(window).scroll(function(){
		var navHeight = $('nav').outerHeight(true);
		var windowHeight = $(window).height();

		var windowTop = $(window).scrollTop();
		var aboutTop = $('#main').offset().top;
		var portfolioTop = $('#changing-purple').offset().top;

		var passWelcome = windowHeight-navHeight;
		var passAbout = aboutTop-navHeight;
		var passPortfolio = portfolioTop-navHeight;

		//Show active link when scrolling
		if(windowTop < passWelcome) {
			$('li').removeClass();
			$('li:nth-child(1)').addClass('active');
		} else if((windowTop >= passAbout) && (windowTop < passPortfolio)) {
			$('li').removeClass();
			$('li:nth-child(2)').addClass('active');
		} else if(windowTop >= passPortfolio) {
			$('li').removeClass();
			$('li:nth-child(3)').addClass('active');
		}

		//Shrink Nav: When scrolling past top of About, decrease padding on nav
		//If you use passAbout in the if statement, transition will be shaky as it recalculates passAbout with the new nav size
		// if(windowTop >= aboutTop) {
		// if(windowTop > passWelcome) {
		if( (windowTop >= aboutTop-144) && ($(window).width() > 632) ) {
			$('ul').addClass('shrink-nav');
		} else {
			$('ul').removeClass();
		}
	})
});