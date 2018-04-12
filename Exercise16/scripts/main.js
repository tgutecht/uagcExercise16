$(document).ready(function(){


//Part 2: Basic Effects
$('#btnShow').on('click', function() {
    $('.display-basic').show();
  });
$('#btnHide').on('click', function() {
    $('.display-basic').hide();
})
$('#btnToggle').on('click', function() {
    $('.display-basic').toggle();
});

//Part 3: More Basic

$(".part3").css("display", "block");

//Part 4: Fade Effects

$('#btnFadeIn').on('click', function() {
    $('.display-fade').fadeIn("slow");
});
$('#btnFadeOut').on('click', function() {
    window.onload = $('.display-fade').fadeOut("slow");
});

$('#btnFadeToggle').on('click', function() {
    $('.display-fade').fadeToggle(10);
});

//
$('#btnSlideDown').on('click', function() {
    $('.display-slide').slideDown();
});

$('#btnSlideUp').on('click', function() {
    $('.display-slide').slideUp();
})


$('#btnSlideToggle').on('click', function() {
    $('.display-slide').slideToggle();
})



});

$('window').onload(function() {
   $('.part3').show();
});
