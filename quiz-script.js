let a1 = document.getElementById("a1");
let a2 = document.getElementById("a2");
let a3 = document.getElementById("a3");
let a4 = document.getElementById("a4");
let a5 = document.getElementById("a4");
let submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", score)

function score() {
    alert(a1.value)
    alert(a2.value)
    alert(a3.value)
    let correctAnswers = 0
    if (+a1.value === 2) {
        correctAnswers++;
        alert("EEE1")
    } 
    if (+a2.value === 687) {
        correctAnswers++;
        alert("EEE2")
    } 
    if (+a3.value === 4) {
        correctAnswers++;
        alert("EEE3")
    } 
    if (a4.value.toLowerCase() === "red planet" || a3.value.toLowerCase() === "the red planet") {
        correctAnswers++;
        alert("EEE4")
    } 
    if (+a5.value === 37) {
        correctAnswers++;
        alert("EEE5")
    }
    alert(correctAnswers)
}