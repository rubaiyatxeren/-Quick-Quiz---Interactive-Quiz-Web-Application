const quizData = [
  {
    question: "Which language runs in web browsers?",
    options: ["Java", "C", "Python", "JavaScript"],
    correct: 3,
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Central Style Sheets",
      "Cascading Style Sheets",
      "Cascading Simple Sheets",
      "Cars SUVs Sailboats",
    ],
    correct: 1,
  },
  {
    question: "What does HTML stand for?",
    options: [
      "Hypertext Markup Language",
      "Hypertext Markdown Language",
      "Hyperloop Machine Language",
      "Helicopters Terminals Motorboats Lamborginis",
    ],
    correct: 0,
  },
  {
    question: "Which of the following is a JavaScript framework?",
    options: ["React", "Laravel", "Django", "Flutter"],
    correct: 0,
  },
  {
    question: "Which database is NoSQL?",
    options: ["MySQL", "MongoDB", "PostgreSQL", "SQLite"],
    correct: 1,
  },
  {
    question: "Which tag is used to create a hyperlink in HTML?",
    options: ["link", "href", "a", "p"],
    correct: 2,
  },
  {
    question: "Inside which HTML element do we put JavaScript?",
    options: ["script", "javascript", "js", "code"],
    correct: 0,
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Google", "Microsoft", "Netscape", "Apple"],
    correct: 2,
  },
  {
    question: "Which CSS property controls the text size?",
    options: ["font-style", "text-size", "font-size", "text-style"],
    correct: 2,
  },
  {
    question: "Which of these is a backend language?",
    options: ["HTML", "CSS", "JavaScript", "Node.js"],
    correct: 3,
  },
  {
    question: "What does JSON stand for?",
    options: [
      "JavaScript Object Notation",
      "Java Standard Output Network",
      "JavaScript Only Numbers",
      "Java Syntax Oriented Notation",
    ],
    correct: 0,
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["double slash", "hash", "HTML comment", "slash star"],
    correct: 0,
  },
  {
    question: "Which of the following is used to style a webpage?",
    options: ["HTML", "CSS", "JavaScript", "Python"],
    correct: 1,
  },
  {
    question: "What year was JavaScript created?",
    options: ["1990", "1995", "2000", "2005"],
    correct: 1,
  },
  {
    question: "Which method adds an element to the end of an array?",
    options: ["push", "pop", "shift", "unshift"],
    correct: 0,
  },
  {
    question: "What is the latest version of HTML?",
    options: ["HTML4", "XHTML", "HTML5", "HTML6"],
    correct: 2,
  },
  {
    question: "Which of these is not a programming language?",
    options: ["Python", "HTML", "Java", "C++"],
    correct: 1,
  },
  {
    question: "What does API stand for?",
    options: [
      "Application Programming Interface",
      "Advanced Programming Input",
      "Application Process Integration",
      "Automated Programming Interface",
    ],
    correct: 0,
  },
  {
    question: "Which of these is a version control system?",
    options: ["Git", "NPM", "Webpack", "Babel"],
    correct: 0,
  },
  {
    question: "What does DOM stand for in web development?",
    options: [
      "Document Object Model",
      "Data Object Management",
      "Digital Output Method",
      "Document Organization Model",
    ],
    correct: 0,
  },
];
const quizContainer = document.getElementById("quizContainer");

let currentQuestion = 0;
let score = 0;

function initializeQuiz() {
  renderQuestion();
}

function renderQuestion() {
  const q = quizData[currentQuestion];

  quizContainer.innerHTML = `
    <div class="mb-8">
      <h2 class="text-2xl font-semibold text-gray-800 mb-6">${q.question}</h2>
      <div class="space-y-3">
        ${q.options
          .map(
            (opt, i) => `
          <button 
            class="w-full text-left p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors"
            onclick="handleAnswer(${i})"
          >
            ${opt}
          </button>
        `
          )
          .join("")}
      </div>
    </div>

    <div class="flex justify-between items-center">
      <span class="text-gray-600">Question ${currentQuestion + 1} of ${
    quizData.length
  }</span>
      <span class="text-gray-600">Score: ${score}</span>
    </div>
  `;
}

function handleAnswer(index) {
  if (index === quizData[currentQuestion].correct) score++;
  currentQuestion++;

  currentQuestion < quizData.length ? renderQuestion() : renderResults();
}

function renderResults() {
  const percent = Math.round((score / quizData.length) * 100);
  const colorClass = percent >= 70 ? "text-green-500" : "text-red-500";

  quizContainer.innerHTML = `
    <div class="text-center">
        <h2 class="text-3xl font-bold text-gray-800 mb-4">Quiz Completed! 🎯 </h2>
        <div class="text-6xl font-bold mb-4 ${colorClass}">${percent}%</div>
        <p class="text-gray-600 mb-6">You scored ${score} out of ${quizData.length} questions correctly. </p>
        <button class="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-semibold" onclick="restartQuiz()">Play Again</button>
    </div>
  `;
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  renderQuestion();
}
initializeQuiz();
