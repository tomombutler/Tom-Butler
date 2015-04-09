// Nav appear

$("nav").on("click", function ( ev ) {

	$(".menu").animate({width:'toggle'}, 700, 'easeInOutCirc');
  $(".menu ul a").fadeIn(700, 'easeInOutCirc');
  $(".close").fadeIn(700, 'easeInOutCirc');
  $(".circle").fadeIn(700, 'easeInOutCirc');
  $("nav").fadeOut(1);

});

$(".close").on("click", function(){

	$(".menu").animate({width:'toggle'}, 700, 'easeInOutCirc');
  $(".menu ul a").fadeOut(700, 'easeInOutCirc');
  $(".close").fadeOut(1);
  $(".circle").fadeOut(700, 'easeInOutCirc');
  $("nav").fadeIn(700, 'easeInOutCirc');
});

//  sticky

// Create a clone of the menu, right next to original.
$('.project-header').addClass('original').clone().insertAfter('.project-header').addClass('cloned').css('position','fixed').css('top','0').css('margin-top','0').css('z-index','500').removeClass('original').hide();

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