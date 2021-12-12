// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_mobile_navbar
function myMenu() {
    var x = document.getElementsByClassName(menuItems)
    if (x.style.display === "block"){
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}