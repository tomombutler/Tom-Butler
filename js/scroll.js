// Scroll JS

// var $scrolltoabout = $("#scrolltoabout");

// var $scrolltocontact = $("#scrolltocontact");

// var $scrolltohome = $("#scrolltohome");

// var scrollSpeed = 800; // milliseconds

// var headerHeight = 75;


// $(".scrollabout").on("click", function ( ev ) {

// 	ev.preventDefault();

// 	$(document.body).animate({
// 		scrollTop: ($scrolltoabout.position().top - headerHeight) + 'px'
// 	}, scrollSpeed);
// });

// $(".scrollcontact").on("click", function ( ev ) {

// 	ev.preventDefault();

// 	$(document.body).animate({
// 		scrollTop: ($scrolltocontact.position().top - headerHeight) + 'px'
// 	}, scrollSpeed);
// });

// $(".scrollhome").on("click", function ( ev ) {

// 	ev.preventDefault();

// 	$(document.body).animate({
// 		scrollTop: $scrolltohome.position().top + 'px'
// 	}, scrollSpeed);
// });

// Nav appear

$(".menu").on("click", function ( ev ) {

	$("nav").fadeToggle(50);
});


// parallax? 

$(window).scroll(function() {
  parallax();
});

function parallax() {
  var scrolled = $(window).scrollTop();
  $('.intro h2').css('top', -(scrolled * 0.3) + 'px');
}



