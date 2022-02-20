let marsimg = document.getElementById("marsimg");


marsimg.addEventListener("click", changeImg);

function changeImg() {
    let imgRandom = Math.random();
    if (imgRandom <= 0.33 && marsimg.src !== "img/mars1.png") {
        marsimg.src = "img/mars1.png"
    } else if (imgRandom <= 0.66) {
        marsimg.src = "img/mars2.png";
    } else {
        marsimg.src = "img/mars3.png";
    }
    let factRandom = Math.random();
}