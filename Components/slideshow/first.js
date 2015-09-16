
var urls = [
    "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    "http://cdn.bulbagarden.net/upload/thumb/f/fb/143Snorlax.png/250px-143Snorlax.png",
    "http://img2.wikia.nocookie.net/__cb20140410200831/pokemon/images/0/02/025Pikachu_Dream.png",
    "http://pre03.deviantart.net/27f2/th/pre/f/2012/218/0/7/_004_charmander___1st_attempt_sugimori_style_by_white__flame-d59zqwh.png"
];

function clickFunction(num) {

 	var x = document.getElementsByClassName("background");
    x[0].style.backgroundImage = "url('" + urls[num] + "')";

	
}



$(function(){

var $content = $('.slides'); // Cache your selectors!

$(".slide-control.left").hover( function loop() {
    $content.stop().animate({  marginLeft: '-=1600' }, 5000, 'linear', function(){
        $content.css({ marginLeft : "0px" });
        loop();
    });
}, function stop() {
    $content.stop();
});

$(".slide-control.right").hover( function loop() {
    $content.stop().animate({  marginLeft: '+=1600' }, 5000, 'linear', function(){
        $content.css({ marginLeft : -$content.outerWidth() });
        loop();
    });
}, function stop() {
    $content.stop();
});




}); //End Function