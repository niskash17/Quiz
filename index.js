const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Jupiter", "Venus", "Saturn"],
    correctAnswer: "Mars",
  },
  {
    question: "What is the largest mammal?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    correctAnswer: "Blue Whale",
  },
];

let currentQuestion = 0;
let score = 0;

const questionContainer = document.getElementById("question-container");
const optionsContainer = document.getElementById("options-container");
const resultContainer = document.getElementById("result-container");
const questionText = document.getElementById("question-text");
const resultText = document.getElementById("result-text");
const scoreText = document.getElementById("score-text");

function startQuiz() {
  questionContainer.style.display = "block";
  resultContainer.style.display = "none";
  showQuestion();
}

function showQuestion() {
  const currentQuizData = quizData[currentQuestion];
  questionText.innerText = currentQuizData.question;
  optionsContainer.innerHTML = "";

  currentQuizData.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.innerText = option;
    button.addEventListener("click", () => checkAnswer(option));
    optionsContainer.appendChild(button);
  });
}

function checkAnswer(selectedOption) {
  const currentQuizData = quizData[currentQuestion];

  if (selectedOption === currentQuizData.correctAnswer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  questionContainer.style.display = "none";
  resultContainer.style.display = "block";

  resultText.innerText = `You got ${score} out of ${quizData.length} questions correct.`;

  if (score === quizData.length) {
    scoreText.innerText = "Congratulations! You got all questions correct.";
  } else {
    scoreText.innerText = "Nice effort! Retry the quiz to improve your score.";
  }
}

function retryQuiz() {
  currentQuestion = 0;
  score = 0;
  startQuiz();
}

startQuiz();
