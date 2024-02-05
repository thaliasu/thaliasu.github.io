/*For the back-to-top button on the IMITATE page*/
$('#button-top').click(function(){
	$([document.documentElement, document.body]).animate({
        scrollTop: (0),
        easing: 'swing'
    }, 1000);
})