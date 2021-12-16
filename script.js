// https://www.w3schools.com/howto/howto_js_slideshow.asp - Slideshow
var slideIndex = 1;
showSlides(slideIndex);



// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_mobile_navbar - Burgermenu
function myMenu() {
    var x = document.getElementsByClassName(menuItems)
    if (x.style.display === "block"){
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
