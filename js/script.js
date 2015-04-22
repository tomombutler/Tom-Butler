// Nav appear

$("nav").on("click", function ( ev ) {

	$(".menu").animate({width:'toggle'}, 350, 'easeInOutCirc');
  $(".menu ul a").fadeIn(350, 'easeInOutCirc');
  $(".close").fadeIn(350, 'easeInOutCirc');
  $(".circle").fadeIn(350, 'easeInOutCir350c');
  $(".menu-stripe").fadeIn(350, 'easeInOutCirc');
  $("nav").fadeOut(1);

});

$(".close").on("click", function(){

	$(".menu").animate({width:'toggle'}, 350, 'easeInOutCirc');
  $(".menu ul a").fadeOut(350, 'easeInOutCirc');
  $(".close").fadeOut(1);
  $(".circle").fadeOut(350, 'easeInOutCirc');
  $(".menu-stripe").fadeOut(350, 'easeInOutCirc');
  $("nav").fadeIn(350, 'easeInOutCirc');
});

//  sticky

// Create a clone of the menu, right next to original.
$('.project-header').addClass('original').clone().insertAfter('.project-header').addClass('cloned').css('position','fixed').css('top','0').css('margin-top','0').css('z-index','350').removeClass('original').hide();

scrollIntervalID = setInterval(stickIt, 10);


function stickIt() {

  var orgElementPos = $('.original').offset();
  orgElementTop = orgElementPos.top;               

  if ($(window).scrollTop() >= (orgElementTop)) {
    // scrolled past the original position; now only show the cloned, sticky element.

    // Cloned element should always have same left position and width as original element.     
    orgElement = $('.original');
    coordsOrgElement = orgElement.offset();
    leftOrgElement = coordsOrgElement.left;  
    widthOrgElement = orgElement.css('width');
    $('.cloned').css('left',leftOrgElement+'px').css('top',0).css('width',widthOrgElement).show();
    $('.original').css('visibility','hidden');
  } else {
    // not scrolled past the menu; only show the original menu.
    $('.cloned').hide();
    $('.original').css('visibility','visible');
  }
}


// Scroll JS

var $scrolltowork = $("#scrolltowork");

var scrollSpeed = 350; // milliseconds


$(".scrollwork").on("click", function ( ev ) {

  ev.preventDefault();

  $(document.body).animate({
    scrollTop: $scrolltowork.position().top + 'px'
  }, scrollSpeed);
});

