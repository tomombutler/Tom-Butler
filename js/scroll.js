// Scroll JS

var $scrolltoabout = $("#scrolltoabout");

var $scrolltocontact = $("#scrolltocontact");

var $scrolltohome = $("#scrolltohome");

var scrollSpeed = 800; // milliseconds

var headerHeight = 75;


$(".scrollabout").on("click", function ( ev ) {

	ev.preventDefault();

	$(document.body).animate({
		scrollTop: ($scrolltoabout.position().top - headerHeight) + 'px'
	}, scrollSpeed);
});

$(".scrollcontact").on("click", function ( ev ) {

	ev.preventDefault();

	$(document.body).animate({
		scrollTop: ($scrolltocontact.position().top - headerHeight) + 'px'
	}, scrollSpeed);
});

$(".scrollhome").on("click", function ( ev ) {

	ev.preventDefault();

	$(document.body).animate({
		scrollTop: $scrolltohome.position().top + 'px'
	}, scrollSpeed);
});

// Nav appear

$(".menu").on("click", function ( ev ) {

	$("nav.mobile").fadeToggle(50);
});


// about pages appear

$(".scrolladmin").on("click", function ( ev ) {

	$("#scrolltoadmin").slideToggle();
	$("#scrolltomarketing").slideUp();
	$("#scrolltodata").slideUp();
});

$(".scrollmarketing").on("click", function ( ev ) {

	$("#scrolltomarketing").slideToggle();
	$("#scrolltoadmin").slideUp();
	$("#scrolltodata").slideUp();
});

$(".scrolldata").on("click", function ( ev ) {

	$("#scrolltodata").slideToggle();
	$("#scrolltoadmin").slideUp();
	$("#scrolltomarketing").slideUp();
});



