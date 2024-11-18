document.addEventListener('DOMContentLoaded', () => {
    const courses = document.querySelectorAll('.course');
    
    courses.forEach(course => {
        course.addEventListener('click', () => {
            const details = course.querySelector('.details');
            if (details) {
                details.classList.toggle('hidden');
            } else {
                const newDetails = document.createElement('div');
                newDetails.classList.add('details');
                newDetails.innerText = 'More details about this course...';
                course.appendChild(newDetails);
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Function to show quiz
    const showQuiz = (quizId) => {
        const quizSection = document.getElementById('quiz-section');
        const quizzes = document.querySelectorAll('.quiz');
        quizzes.forEach(quiz => quiz.classList.add('hidden'));
        document.getElementById(quizId).classList.remove('hidden');
        quizSection.classList.remove('hidden');
    };

    // Function to submit the quiz and show feedback
    const submitQuiz = () => {
        const quizForm = document.getElementById('quiz-form');
        const quizFeedback = document.getElementById('quiz-feedback');
        const correctAnswers = {
            q1: 'a',
            q2: 'c',
            q3: 'a',
            q4: 'a',
            q5: 'a'
        };
        let score = 0;
        const totalQuestions = Object.keys(correctAnswers).length;

        for (let i = 1; i <= totalQuestions; i++) {
            const questionName = `q${i}`;
            const selectedAnswer = quizForm.querySelector(`input[name="${questionName}"]:checked`);
            if (selectedAnswer && selectedAnswer.value === correctAnswers[questionName]) {
                score++;
            }
        }

        // Log the score for debugging
        console.log(`You scored ${score} out of ${totalQuestions}`);

        // Display feedback
        quizFeedback.classList.remove('hidden');
        quizFeedback.innerHTML = `
            <h4>Quiz Results</h4>
            <p>You scored ${score} out of ${totalQuestions}.</p>
            <p>${score === totalQuestions ? 'Great job!' : 'Try again to improve your score.'}</p>
        `;
    };

    window.submitQuiz = submitQuiz;
});

document.addEventListener('DOMContentLoaded', () => {
    const courses = document.querySelectorAll('.course');

    courses.forEach(course => {
        course.addEventListener('click', () => {
            const details = course.querySelector('.details');
            if (details) {
                details.classList.toggle('hidden');
            } else {
                const newDetails = document.createElement('div');
                newDetails.classList.add('details');
                newDetails.innerText = 'More details about this course...';
                course.appendChild(newDetails);
            }
        });
    });
});