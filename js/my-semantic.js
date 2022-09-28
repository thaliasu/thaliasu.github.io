$('.ui.accordion')
    .accordion({
  	  exclusive: true //change to false if you want user to able to keep multiple open at once
    });
    
$('.ui.sticky')
  .sticky({
  	context: '#portfolio'
  });

$('#nav-btn').click(function(){
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