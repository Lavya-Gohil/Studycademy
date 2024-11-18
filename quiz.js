// Correct answers
const correctAnswers = {
    q1: "a",
    q2: "c",
    q3: "a",
    q4: "a",
    q5: "a"
};

// Handle quiz submission
function submitQuiz() {
    const form = document.getElementById("quiz-form");
    const feedback = document.getElementById("quiz-feedback");
    feedback.innerHTML = ""; // Clear previous feedback
    let score = 0;

    // Check answers
    for (let question in correctAnswers) {
        const selected = form.elements[question].value;

        if (selected === correctAnswers[question]) {
            score++;
        }
    }

    // Display feedback
    feedback.style.display = "block";
    feedback.className = score === Object.keys(correctAnswers).length ? "correct" : "incorrect";

    if (score === Object.keys(correctAnswers).length) {
        feedback.innerHTML = `<h3>🎉 Excellent! You scored ${score}/${Object.keys(correctAnswers).length}!</h3>`;
    } else {
        feedback.innerHTML = `<h3>🙁 You scored ${score}/${Object.keys(correctAnswers).length}. Try again!</h3>`;
    }
}
