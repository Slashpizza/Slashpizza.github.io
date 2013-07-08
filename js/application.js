$(document).ready(function() {
	var $reelContainer = $('#reels');
	var $galleryContainer = $('#gallery');

	$('.contact-info .reel').click(function() {
		$.scrollTo($reelContainer, 800);
	});
	$('#viewDemoReels').click(function() {
		$.scrollTo($reelContainer, 800);	
	});

	$('.contact-info .portfolio').click(function() {
		$.scrollTo($galleryContainer, 800);
	});

	$(window).scroll( function() {
	    var value = $(this).scrollTop();
	    if (value > 120) {
	        $("#floating_nav").removeClass('hidden');
	    } else {
	    	$("#floating_nav").addClass('hidden');
	    }	
	});

	$('.carousel').carousel({
      interval: 3000
    });
});