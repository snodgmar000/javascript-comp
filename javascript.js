//Made by Mark Snodgrass, DK, Josh Turner, Alex Minnick
function changeColor(squareID) {
    var square = document.getElementById(squareID);
    var randomColor = getRandomColor();
    square.style.backgroundColor = randomColor;
}
let intervalId = null;

function randomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function flashColors() {
    const flashes = document.querySelectorAll(".flash");
    flashes.forEach(function (flash) {
        const randomColorValue = randomColor();
        flash.style.backgroundColor = randomColorValue; 
    });
}

function toggleFlashing() {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    } else {
        intervalId = setInterval(flashColors, 100);
    }
}
