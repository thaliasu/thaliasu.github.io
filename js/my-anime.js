var path = document.querySelector('path');
var length = path.getTotalLength();

anime.timeline({
  easing: 'easeOutExpo',
})
.add({
	targets: '#nav-icon, #scroll-icon',
	opacity: [0,1],
	translateY: [20,0],
	duration: 10000
})
.add({
  targets: '.morph',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 2500,
  /*delay: function(el, i) { return i * 250 },*/
}, '-=10000')
.add({
	targets: 'body, nav',
	backgroundColor: '#FDC134',
	duration: 1,
}, '-=7499')
;