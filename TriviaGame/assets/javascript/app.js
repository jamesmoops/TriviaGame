(function () {
    const myQuestions = [
        {
            question: "What year did the first 007 come out?",
            answers: {
                a: "1961",
                b: "1970",
                c: "1958"
            },
            correctAnswer: "a"
        },
        {

            question: "What is the first star wars?",
            answers: {
                a: "Phantom menace",
                b: "A New Hope",
                c: "The Empire Strikes Back"
            },
            correctAnswer: "b"
        },
        {
            question: "What is the capital of California?",
            answers: {
                a: "San Francisco",
                b: "Oakland",
                c: "Sacramento",
            },
            correctAnswer: "c"
        }
    ];

    function buildQuiz() {
        // Where you store the HTML output
        const output = [];

        // For each question store the list of answer choices
        myQuestions.forEach((currentQuestion, questionNumber) => {

            const answers = [];

            // for each available answer.
            for (letter in currentQuestion.answers) {
                // .. HTML radio btn
                answers.push(
                    `<label>
                   <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                 </label>`
                );
            }

            // add these questions to the output
            output.push(
                `<div class="slide">
                 <div class="question"> ${currentQuestion.question} </div>
                 <div class="answers"> ${answers.join("")} </div>
               </div>`
            );
        });

        // combine outlist into a string
        quizContainer.innerHTML = output.join("");
    }

    function showResults() {
        // gather answers
        const answerContainers = quizContainer.querySelectorAll(".answers");

        // keep track of the users answers
        let numCorrect = 0;

        // for each question finds an answer
        myQuestions.forEach((currentQuestion, questionNumber) => {
          
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to number of correct answers
                numCorrect++;

                // color answers green
                answerContainers[questionNumber].style.color = "lightgreen";
            } else {
                // if answer wrong or blank
                // color the answers red
                answerContainers[questionNumber].style.color = "red";
            }
        });

        // show number of correct answers out of total
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
        // don't entirely know how this block of code works below from line 99 to 116
    function showSlide(n) {
        slides[currentSlide].classList.remove("active-slide");
        slides[n].classList.add("active-slide");
        currentSlide = n;

        if (currentSlide === 0) {
            previousButton.style.display = "none";
        } else {
            previousButton.style.display = "inline-block";
        }

        if (currentSlide === slides.length - 1) {
            nextButton.style.display = "none";
            submitButton.style.display = "inline-block";
        } else {
            nextButton.style.display = "inline-block";
            submitButton.style.display = "none";
        }
    }

    function showNextSlide() {
        showSlide(currentSlide + 1);
    }

    function showPreviousSlide() {
        showSlide(currentSlide - 1);
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");

    // displaying quiz
    buildQuiz();

    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    showSlide(0);

    // showing results
    submitButton.addEventListener("click", showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
})();

// Got relatively confused toward the end from 95 to the rest. Was able to get the right code but not able to make live, will come to office hours to seek how to get it all going properly. 