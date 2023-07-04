var planet = document.getElementById("planet");
var isMouseDown = false;
var startMouseX = 0;
var startMouseY = 0;
var startRotateX = 0;
var startRotateY = 0;

planet.addEventListener("mousedown", function (event) {
    isMouseDown = true;
    startMouseX = event.clientX;
    startMouseY = event.clientY;
    startRotateX = planet.style.transform ? parseInt(planet.style.transform.split("rotateX(")[1]) : 0;
    startRotateY = planet.style.transform ? parseInt(planet.style.transform.split("rotateY(")[1]) : 0;
});

planet.addEventListener("mouseup", function () {
    isMouseDown = false;
});

planet.addEventListener("mousemove", function (event) {
    if (isMouseDown) {
        var rotateX = startRotateX + (event.clientY - startMouseY);
        var rotateY = startRotateY + (event.clientX - startMouseX);
        planet.style.transform = "rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)";
    }
});

// Touch events for mobile
planet.addEventListener("touchstart", function (event) {
    event.preventDefault(); // Prevent default touch actions
    isMouseDown = true;
    var touch = event.touches[0];
    startMouseX = touch.clientX;
    startMouseY = touch.clientY;
    startRotateX = planet.style.transform ? parseInt(planet.style.transform.split("rotateX(")[1]) : 0;
    startRotateY = planet.style.transform ? parseInt(planet.style.transform.split("rotateY(")[1]) : 0;
});

planet.addEventListener("touchend", function () {
    isMouseDown = false;
});

planet.addEventListener("touchmove", function (event) {
    if (isMouseDown) {
        var touch = event.touches[0];
        var rotateX = startRotateX + (touch.clientY - startMouseY);
        var rotateY = startRotateY + (touch.clientX - startMouseX);
        planet.style.transform = "rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)";
    }
});
