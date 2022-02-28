// Website Homepage - David Stobbe

// Variables for HTML elements
let marsimg = document.getElementById("marsimg");
let randFact = document.getElementById("randFact");
let submitBtn = document.getElementById("submitBtn");

// Event Listener for Mars button
marsimg.addEventListener("click", changeImg);

// Function - random fact generator
function changeImg() {
    let imgRandom = Math.random();
    if (marsimg.src === "http://127.0.0.1:5500/img/mars-home.png") {
        if (imgRandom <= 0.33) {
            marsimg.src = "img/mars1.png"
        } else if (imgRandom <= 0.66) {
            marsimg.src = "img/mars2.png"
        } else {
            marsimg.src = "img/mars3.png"
        }
    } else if (marsimg.src === "http://127.0.0.1:5500/img/mars1.png") {
        if (imgRandom <= 0.5) {
            marsimg.src = "img/mars2.png";
        } else {
            marsimg.src = "img/mars3.png";
        }
    } else if (marsimg.src === "http://127.0.0.1:5500/img/mars2.png") {
        if (imgRandom <= 0.5) {
            marsimg.src = "img/mars3.png"
        } else {
            marsimg.src = "img/mars1.png"
        }
    } else {
        if (imgRandom <= 0.5) {
            marsimg.src = "img/mars1.png"
        } else {
            marsimg.src = "img/mars2.png"
        }
    }
    let factRandom = Math.random();
    if (factRandom <= 0.1) {
        randFact.innerHTML = "Mars has two moons - Phobos and Deimos!"
    } else if (factRandom <= 0.2) {
        randFact.innerHTML = "Mars was named after the roman god of war, because its color resembles that of blood."
    } else if (factRandom <= 0.3) {
        randFact.innerHTML = "The largest mountain and volcano in the Solar System is on the planet Mars. It is called Olympus Mons!"
    } else if (factRandom <= 0.4) {
        randFact.innerHTML = "Mars has ice caps at its poles!"
    } else if (factRandom <= 0.5) {
        randFact.innerHTML = "There have been around 50 mars missions in history - and only half of them have been successful!"
    } else if (factRandom <= 0.6) {
        randFact.innerHTML = "Mars is 307 million km away from the Earth!"
    } else if (factRandom <= 0.7) {
        randFact.innerHTML = "A Mars year is 687 Earth-days long!"
    } else if (factRandom <= 0.8) {
        randFact.innerHTML = "Mars has four distinct seasons, just like the Earth!"
    } else if (factRandom <= 0.9) {
        randFact.innerHTML = "Mars is the fourth planet from the sun!"
    } else {
        randFact.innerHTML = "Mars has an extremely small atmosphere made mostly out of carbon dioxide!"
    }
}

