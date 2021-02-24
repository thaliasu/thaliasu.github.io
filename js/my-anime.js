// var path = document.querySelector('path');
// var length = path.getTotalLength();

anime.timeline({
  easing: 'easeOutExpo',
})
.add({
	targets: '.nav-link',
	opacity: [0,1],
	duration: 3000
})
.add({
  targets: '.morph',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 2500,
}, '-=2000')
.add({
  targets: '.morph-scroll-icon',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 2500,
}, '-=2500')
.add({
	targets: 'body, nav',
	backgroundColor: '#2E343B',
	duration: 1
})
;