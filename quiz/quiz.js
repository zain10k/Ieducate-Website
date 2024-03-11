const quizData = {
    Math: [
        {
            question: "What is 2 + 2?",
            options: ["3", "4", "5", "6"],
            correctAnswer: "4"
        },
        {
            question: "What is 5 * 5?",
            options: ["10", "25", "30", "50"],
            correctAnswer: "25"
        },
        {
            question: "What is 5 * 5?",
            options: ["10", "25", "30", "50"],
            correctAnswer: "25"
        },
        {
            question: "What is the square root of 64?",
            options: ["8", "6", "4", "10"],
            correctAnswer: "8"
        },
        
        {
            question: "What is the square root of 64?",
            options: ["8", "6", "4", "10"],
            correctAnswer: "8"
        },
        {
            question: "What is 10 - 3?",
            options: ["5", "6", "7", "8"],
            correctAnswer: "7"
        },
        
        {
            question: "What is 10 - 3?",
            options: ["5", "6", "7", "8"],
            correctAnswer: "7"
        },
        {
            question: "What is 9 / 3?",
            options: ["2", "3", "4", "5"],
            correctAnswer: "3"
        },
        {
            question: "What is 9 / 3?",
            options: ["2", "3", "4", "5"],
            correctAnswer: "3"
        }
    ],
    Science: [
        {
            question: "What is the chemical symbol for water?",
            options: ["H2O", "CO2", "NaCl", "O2"],
            correctAnswer: "H2O"
        },
        {
            question: "What is the chemical symbol for water?",
            options: ["H2O", "CO2", "NaCl", "O2"],
            correctAnswer: "H2O"
        },
        {
            question: "What is the chemical symbol for oxygen?",
            options: ["H", "O2", "O", "CO2"],
            correctAnswer: "O2"
        },
        {
            question: "What is the chemical symbol for oxygen?",
            options: ["H", "O2", "O", "CO2"],
            correctAnswer: "O2"
        },
        {
            question: "What is the largest planet in the solar system?",
            options: ["Earth", "Mars", "Jupiter", "Venus"],
            correctAnswer: "Jupiter"
        },
        {
            question: "What is the largest planet in the solar system?",
            options: ["Earth", "Mars", "Jupiter", "Venus"],
            correctAnswer: "Jupiter"
        },
        {
            question: "What is the powerhouse of the cell?",
            options: ["Nucleus", "Mitochondria", "Ribosome", "Lysosome"],
            correctAnswer: "Mitochondria"
        },
        {
            question: "What is the powerhouse of the cell?",
            options: ["Nucleus", "Mitochondria", "Ribosome", "Lysosome"],
            correctAnswer: "Mitochondria"
        },
        {
            question: "What is the process by which plants make their food?",
            options: ["Photosynthesis", "Respiration", "Fermentation", "Transpiration"],
            correctAnswer: "Photosynthesis"
        },
        {
            question: "What is the process by which plants make their food?",
            options: ["Photosynthesis", "Respiration", "Fermentation", "Transpiration"],
            correctAnswer: "Photosynthesis"
        }
    ],
    History: [
        {
            question: "Who was the first president of the United States?",
            options: ["Thomas Jefferson", "George Washington", "Abraham Lincoln", "John Adams"],
            correctAnswer: "George Washington"
        },
        {
            question: "Who was the first president of the United States?",
            options: ["Thomas Jefferson", "George Washington", "Abraham Lincoln", "John Adams"],
            correctAnswer: "George Washington"
        },
        {
            question: "When was the Declaration of Independence signed?",
            options: ["1776", "1789", "1800", "1812"],
            correctAnswer: "1776"
        },
        {
            question: "When was the Declaration of Independence signed?",
            options: ["1776", "1789", "1800", "1812"],
            correctAnswer: "1776"
        },
        {
            question: "Who wrote 'The Communist Manifesto'?",
            options: ["Karl Marx", "Vladimir Lenin", "Joseph Stalin", "Leon Trotsky"],
            correctAnswer: "Karl Marx"
        },
        {
            question: "Who wrote 'The Communist Manifesto'?",
            options: ["Karl Marx", "Vladimir Lenin", "Joseph Stalin", "Leon Trotsky"],
            correctAnswer: "Karl Marx"
        },
        {
            question: "Which war was fought between the North and the South in the United States?",
            options: ["Revolutionary War", "World War I", "Civil War", "World War II"],
            correctAnswer: "Civil War"
        },
        {
            question: "Which war was fought between the North and the South in the United States?",
            options: ["Revolutionary War", "World War I", "Civil War", "World War II"],
            correctAnswer: "Civil War"
        },
        {
            question: "Which country was the first to circumnavigate the globe?",
            options: ["Spain", "Portugal", "England", "France"],
            correctAnswer: "Spain"
        },
        {
            question: "Which country was the first to circumnavigate the globe?",
            options: ["Spain", "Portugal", "England", "France"],
            correctAnswer: "Spain"
        }
    ]
};


let selectedSubject;
let currentQuestion = 0;
let score = 0;

// Function to select a subject
function selectSubject(subject) {
    selectedSubject = subject;
    document.getElementById("start-btn").removeAttribute("disabled");
}

// Function to start the quiz
function startQuiz() {
    document.getElementById("quiz-container").style.display = "block";
    document.getElementById("start-btn").style.display = "none";
   // Hide the subjects
    document.getElementById("subject-container").style.display = "none";
    document.getElementById("quiz-heading").style.display = "block"; // Show the quiz heading
    showQuestion();
}


// Function to display a question
function showQuestion() {
    const questionContainer = document.getElementById("question");
    const optionsContainer = document.getElementById("options");
    const currentQuizData = quizData[selectedSubject][currentQuestion];

    // Display the question
    questionContainer.innerText = currentQuizData.question;
    optionsContainer.innerHTML = "";

    // Display options
    currentQuizData.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("option-btn");
        button.addEventListener("click", () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });

    
    // Reset the timer if it exists
    clearInterval(timer);

    // Set timer for 15 seconds
    let timeLeft = 10;
    const timerDisplay = document.getElementById("timer");
    timerDisplay.innerText = timeLeft;

    timer = setInterval(() => {
        timeLeft--;
        timerDisplay.innerText = timeLeft;

        // Move to the next question if time runs out
        if (timeLeft === 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);

    // Show the "Next" button
    const nextButton = document.getElementById("next-btn");
    nextButton.style.display = "block";
    nextButton.disabled = true; // Disable the button initially
    nextButton.addEventListener("click", nextQuestion);


}

// Function to check the answer
function checkAnswer(answer) {
    const currentQuizData = quizData[selectedSubject][currentQuestion];

    if (answer === currentQuizData.correctAnswer) {
        score++;
    }

    // Disable all option buttons after selecting an answer
    const optionButtons = document.querySelectorAll(".option-btn");
    optionButtons.forEach(button => {
        button.setAttribute("disabled", "true");
    });

    // Enable the "Next" button
    document.getElementById("next-btn").removeAttribute("disabled");
}

// Function to move to the next question
function nextQuestion() {
    currentQuestion++;

    // Hide the "Next" button
    document.getElementById("next-btn").style.display = "none";

    if (currentQuestion < quizData[selectedSubject].length) {
        showQuestion();
    } else {
        endQuiz();
    }
}
// Function to end the quiz
function endQuiz() {
    const scoreContainer = document.getElementById("score-container");
    const scoreElement = document.getElementById("score");

    // Hide the quiz container
    document.getElementById("quiz-container").style.display = "none";

    // Display the score
    scoreElement.innerText = score;
    scoreContainer.style.display = "block";

    // Check if all questions have been answered
    if (currentQuestion === quizData[selectedSubject].length) {
        // Reset quiz state
        currentQuestion = 0;
        score = 0;
    }
}

let timer;

// Function to start the timer
function startTimer() {
    let timeLeft = 15; // Set the time limit in seconds
    const timerElement = document.getElementById("timer");

    timer = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timer);
            nextQuestion(); // Move to the next question when time runs out
        } else {
            timerElement.innerText = `Time Left: ${timeLeft} seconds`;
            timeLeft--;
        }
    }, 1000); // Update timer every second
}

// Function to stop the timer   
function stopTimer() {
    clearInterval(timer);
}

// Call startTimer() when you want to start the timer, and stopTimer() when you want to stop it

// Function to display subject selection after quiz ends
function displaySubjects() {
    // Reset quiz state
    currentQuestion = 0;
    score = 0;

    // Hide the score container
    document.getElementById("score-container").style.display = "none";

    // Show the subjects
    document.getElementById("subject-container").style.display = "block";
    document.getElementById("quiz-heading").style.display = "none"; // Hide the quiz heading

    // Reset selected subject
    selectedSubject = null;
}
