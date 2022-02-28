// Website quiz - David Stobbe

//Variables for HTML elements 
let a1 = document.getElementById("a1");
let a2 = document.getElementById("a2");
let a3 = document.getElementById("a3");
let a4 = document.getElementById("a4");
let a5 = document.getElementById("a5");
let submitBtn = document.getElementById("submitBtn");
let scoreEl = document.getElementById("score");
let percentage = document.getElementById("percentage");
let feedback1 = document.getElementById("feedback1");
let feedback2 = document.getElementById("feedback2");
let feedback3 = document.getElementById("feedback3");
let feedback4 = document.getElementById("feedback4");
let feedback5 = document.getElementById("feedback5");
let encouragement = document.getElementById("encouragement");

// Event listener for submit button
submitBtn.addEventListener("click", score)

// function - corrects quiz
function score() {
    let correctAnswers = 0
    if (+a1.value === 2) {
        correctAnswers++;
        a1.classList.remove("incorrect")
        a1.classList.add("correct");
        feedback1.innerHTML = "Correct!";
    } else {
        a1.classList.remove("correct")
        a1.classList.add("incorrect");
        feedback1.innerHTML = "Incorrect (2)";
    }
    if (+a2.value === 687) {
        correctAnswers++;
        a2.classList.remove("incorrect")
        a2.classList.add("correct");
        feedback2.innerHTML = "Correct!";
    } else {
        a2.classList.remove("correct")
        a2.classList.add("incorrect");
        feedback2.innerHTML = "Incorrect (687)";
    }
    if (+a3.value === 4) {
        correctAnswers++;
        a3.classList.remove("incorrect")
        a3.classList.add("correct");
        feedback3.innerHTML = "Correct!";
    } else {
        a3.classList.remove("correct")
        a3.classList.add("incorrect");
        feedback3.innerHTML = "Incorrect (4)";
    }
    if (a4.value.toLowerCase() === "red planet" || a4.value.toLowerCase() === "the red planet") {
        correctAnswers++;
        a4.classList.remove("incorrect")
        a4.classList.add("correct");
        feedback4.innerHTML = "Correct!";
    } else {
        a4.classList.remove("correct")
        a4.classList.add("incorrect");
        feedback4.innerHTML = "Incorrect (red planet)";

    }
    if (+a5.value === 37) {
        correctAnswers++;
        a5.classList.remove("incorrect")
        a5.classList.add("correct");
        feedback5.innerHTML = "Correct!";
    } else {
        a5.classList.remove("correct")
        a5.classList.add("incorrect");
        feedback5.innerHTML = "Incorrect (37)";
    }
    scoreEl.innerHTML = correctAnswers
    percentage.innerHTML = (correctAnswers/5) * 100
    if (percentage.innerHTML <= 40) {
        encouragement.innerHTML = "Oh no!"
    } else if (percentage.innerHTML <= 60) {
        encouragement.innerHTML = "Better luck next time!"
    } else if (percentage.innerHTML <= 80) {
        encouragement.innerHTML = "So close!"
    } else {
        encouragement.innerHTML = "Wow!"
    }
}