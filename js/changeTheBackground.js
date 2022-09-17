function load() {
    defaultBackground();
}

var images = ['https://images.hdqwalls.com/wallpapers/retro-wave-4k-zx.jpg', 'https://wallpaperaccess.com/full/5046197.jpg', 'https://wallpaperaccess.com/full/2360706.png'];
var index = 0;


//Requirement 8
function defaultBackground() {
    document.getElementById('particles-js').style.backgroundImage = 'url(' + images[0] + ')';
}

function changeImage() {
    index++;
    if (index >= images.length) index = 0;
    document.getElementById('particles-js').style.backgroundImage = 'url(' + images[index] + ')';
}

//Requirement 14
$("#header").on("click", function () {
    changeImage();
})