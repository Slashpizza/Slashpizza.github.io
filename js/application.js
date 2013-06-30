$(document).ready(function() {
	var $reelContainer = $('#reels');
	var $galleryContainer = $('#gallery')

	$('.contact-info .reel').click(function() {
		$.scrollTo($reelContainer, 800);
	})
	$('#viewDemoReels').click(function() {
		$.scrollTo($reelContainer, 800);	
	})

	$('.contact-info .portfolio').click(function() {
		$.scrollTo($galleryContainer, 800);
	})
})