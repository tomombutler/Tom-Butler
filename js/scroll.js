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

	$(".nav-expand").fadeIn(300);
});

// Nav close

$(".close-section").on("click", function(){

	$(".nav-expand").fadeOut();
});


// parallax 

$(window).scroll(function() {
  parallax();
});

function parallax() {
  var scrolled = $(window).scrollTop();
  $('.intro h2').css('top', -(scrolled * 0.1) + 'px');
}

$(window).scroll(function() {
  parallax();
});

function parallax() {
  var scrolled = $(window).scrollTop();
  $('article h3').css('top', -(scrolled * 0.1) + 'px');
}


// project fade on scroll

$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.project').each( function(i){
            
            var bottom_of_object = $(this).offset().top - 250 + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},400);
                    
            }
            
        }); 
    
    });
    
});



