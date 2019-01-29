$('.ui.accordion')
    .accordion({
  	  exclusive: false
    });
    
$('.ui.sticky')
  .sticky({
  	context: '#portfolio'
  });

$('#nav-icon').click(function(){
	$('.sidebar')
		/*.sidebar('toggle', 'defaultTransition', {
			computer: {
				right: 'overlay'
			},
			mobile: {
				right: 'overlay'
			}
		});*/
		.sidebar('setting', 'transition', 'overlay')
		.sidebar('toggle')
	;
});

$('.item').click(function(){
	$('.sidebar')
		.sidebar('toggle');
});