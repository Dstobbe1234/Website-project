let a1 = document.getElementById("a1");
let a2 = document.getElementById("a2");
let a3 = document.getElementById("a3");
let a4 = document.getElementById("a4");
let a5 = document.getElementById("a5");
let submitBtn = document.getElementById("submitBtn");
let scoreEl = document.getElementById("score");
let percentage = document.getElementById("percentage");


submitBtn.addEventListener("click", score)

function score() {
    let correctAnswers = 0
    if (+a1.value === 2) {
        correctAnswers++;
    } 
    if (+a2.value === 687) {
        correctAnswers++;
    } 
    if (+a3.value === 4) {
        correctAnswers++;
    } 
    if (a4.value.toLowerCase() === "red planet" || a3.value.toLowerCase() === "the red planet") {
        correctAnswers++;
    } 
    if (+a5.value === 37) {
        correctAnswers++;
    }
    scoreEl.innerHTML = correctAnswers
    percentage.innerHTML = (correctAnswers/5) * 100
}