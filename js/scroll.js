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

$("nav").on("click", function ( ev ) {

	$(".nav-overlay").fadeIn(300);
    $("nav").fadeOut(300);
    $("header h1").css("color", "#fefefe");
});

// Nav close

$(".close").on("click", function(){

	$(".nav-overlay").fadeOut(300);
    $("nav").fadeIn(300);
    $("header h1").css("color", "#181818");
});

//  sticky

<<<<<<< HEAD
// Create a clone of the menu, right next to original.
$('.project-header').addClass('original').clone().insertAfter('.project-header').addClass('cloned').css('position','fixed').css('top','0').css('margin-top','0').css('z-index','500').removeClass('original').hide();
=======
// parallax 
>>>>>>> origin/master

scrollIntervalID = setInterval(stickIt, 10);

<<<<<<< HEAD

function stickIt() {

  var orgElementPos = $('.original').offset();
  orgElementTop = orgElementPos.top;               

  if ($(window).scrollTop() >= (orgElementTop) - 10) {
    // scrolled past the original position; now only show the cloned, sticky element.

    // Cloned element should always have same left position and width as original element.     
    orgElement = $('.original');
    coordsOrgElement = orgElement.offset();
    leftOrgElement = coordsOrgElement.left;  
    widthOrgElement = orgElement.css('width');
    $('.cloned').css('left',leftOrgElement+'px').css('top',10).css('width',widthOrgElement).show();
    $('.original').css('visibility','hidden');
  } else {
    // not scrolled past the menu; only show the original menu.
    $('.cloned').hide();
    $('.original').css('visibility','visible');
  }
}
=======
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
>>>>>>> origin/master



