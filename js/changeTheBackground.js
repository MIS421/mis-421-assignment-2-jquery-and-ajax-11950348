function load() {
    defaultBackground();
}

var images = ['https://images.hdqwalls.com/wallpapers/retro-wave-4k-zx.jpg', 'https://i.imgur.com/aTCmYyS.jpg' ,'https://wallpaperaccess.com/full/5046197.jpg', 'https://wallpaperaccess.com/full/2360706.png'];
var index = 0;


//Requirement 8
//I target #particles-js in the css file with the background image since it needs to fill the particles container because thats the background.
function defaultBackground() {
    document.getElementById('particles-js').style.backgroundImage = 'url(' + images[0] + ')';
}

//BONUS
function changeImage() {
    index++;
    if (index >= images.length) index = 0;
    document.getElementById('particles-js').style.backgroundImage = 'url(' + images[index] + ')';
}

//Requirement 14
$("#header").on("click", function () {
    changeImage();
})