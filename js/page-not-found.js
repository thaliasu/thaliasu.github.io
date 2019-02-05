anime.timeline({
  easing: 'easeOutExpo',
})
.add({
  targets: '.morph',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 2500
});