$(function(){

////////First Image
$('.tint.first').mouseenter(function() {
	$(this).addClass("me img");
   
    
});
$('.tint.first').mouseleave(function() {
	$(this).removeClass("me img");
   
    
});


$('.tint.first').on('click', function() {
	$(this).removeClass("me img");
	$(this).toggleClass('clicked');
	
   
    
});

////////Second Image
$('.tint.one').mouseenter(function() {
	$(this).addClass("meone img");
   
    
});
$('.tint.one').mouseleave(function() {
	$(this).removeClass("meone img");
   
    
});


$('.tint.one').on('click', function() {
	$(this).removeClass("meone img");
	$(this).toggleClass('clicked');
   
    
});
   
////////Third Image   
$('.tint.two').mouseenter(function() {
	$(this).addClass("metwo img");
   
    
});
$('.tint.two').mouseleave(function() {
	$(this).removeClass("metwo img");
   
    
});


$('.tint.two').on('click', function() {
	$(this).removeClass("metwo img");
	$(this).toggleClass('clicked');
   
    
});
////////////////////////////////////////
////////////////////////////////////////
//////Fade out on mouseclick
////////////////////////////////////////


$('.tint.first').on('click', function (e) {
	$('#img-cover').fadeToggle();

});
$('.tint.first.clicked').on('click', function () {
    $('#img-cover').fadeOut();
});

$('#img-cover').on('click', function () {
    $('#img-cover').fadeOut();
    $('.tint.first').toggleClass('clicked');
});

///////////
///////////
$('.tint.one').on('click', function (e) {
$('#img-cover1').fadeToggle();

});



$('#img-cover1').on('click', function () {
    $('#img-cover1').fadeOut();
    $('.tint.one').toggleClass('clicked');
});


///////////
///////////
$('.tint.two').on('click', function (e) {
$('#img-cover2').fadeToggle();

});

$('#img-cover2').on('click', function () {
    $('#img-cover2').fadeOut();
    $('.tint.two').toggleClass('clicked');
});

///////                       //////////|
//////////////FOCUS ON ME///////////////|
//////////                    //////////|

$('.fa.fa-globe').hover(function () {
    $('#section-cover').fadeIn();


});

$('.fa.fa-language').hover(function () {
    $('#section-cover').fadeIn();

});

$('.fa.fa-hourglass').hover(function () {
    $('#section-cover').fadeIn();

});
//Removing all the focuses from previous elements
$('#section-cover').on('click', function () {
    
    $('.fa.fa-globe').css("position","").css("z-index","");
    $('.one .value-multiplier').css("position","").css("z-index","");
    $('.one .value-heading').css("position","").css("z-index","");
    $('.one .value-description').css("position","").css("z-index","");

    $('.fa.fa-language').css("position","").css("z-index","");
    $('.two .value-multiplier').css("position","").css("z-index","");
    $('.two .value-heading').css("position","").css("z-index","");
    $('.two .value-description').css("position","").css("z-index","");

    $('.fa.fa-hourglass').css("position","").css("z-index","");
    $('.three .value-multiplier').css("position","").css("z-index","");
    $('.three .value-heading').css("position","").css("z-index","");
    $('.three .value-description').css("position","").css("z-index","");
    $('#section-cover').fadeOut();
});

$('.fa.fa-globe').mouseenter(function () {
    $('.fa.fa-globe').css("position","relative").css("z-index","1000");
    $('.one .value-multiplier').css("position","relative").css("z-index","1000");
    $('.one .value-heading').css("position","relative").css("z-index","1000");
    $('.one .value-description').css("position","relative").css("z-index","1000");

});
$('.fa.fa-language').mouseenter(function () {
    $('.fa.fa-language').css("position","relative").css("z-index","1000");
    $('.two .value-multiplier').css("position","relative").css("z-index","1000");
    $('.two .value-heading').css("position","relative").css("z-index","1000");
    $('.two .value-description').css("position","relative").css("z-index","1000");

});
$('.fa.fa-hourglass').mouseenter(function () {
    $('.fa.fa-hourglass').css("position","relative").css("z-index","1000");
    $('.three .value-multiplier').css("position","relative").css("z-index","1000");
    $('.three .value-heading').css("position","relative").css("z-index","1000");
    $('.three .value-description').css("position","relative").css("z-index","1000");
});


///------------------------------------////////
//---------MOVING THE SLIDE ON HOVER--------///
///------------------------------------////////


var $content = $('.slides'); // Cache your selectors!

$(".slide-control.left").hover( function loop() {
    $content.stop().animate({  marginLeft: '-=2000' }, 5000, 'linear', function(){
        $content.css({ marginLeft : "0px" });
        loop();
    });
}, function stop() {
    $content.stop();
});

$(".slide-control.right").hover( function loop() {
    $content.stop().animate({  marginLeft: '+=2000' }, 5000, 'linear', function(){
        $content.css({ marginLeft : -$content.outerWidth() });
        loop();
    });
}, function stop() {
    $content.stop();
});


}); //Ending Function



//////////////////////////////////For Slideshow///////////////////
//////////////////////////////////////////////////////////////////

