// Quiz Data

const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Counting Style Sheets",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Highertext Madeup Language",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  {
    question: "Which company developed JavaScript?",
    a: "Microsoft",
    b: "Netscape",
    c: "Google",
    d: "Apple",
    correct: "b",
  },
  {
    question: "What is the correct file extension for JavaScript file?",
    a: "java",
    b: ".js",
    c: ".javascript",
    d: ".jscript",
    correct: "b",
  },
  {
    question: "Which symbol is used for single-line comments in JavaScript?",
    a: "//",
    b: "/*",
    c: "#",
    d: "<!--",
    correct: "a",
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    a: "alertBox('Hello World');",
    b: "msg('Hello World');",
    c: "alert('Hello World');",
    d: "msgBox('Hello World');",
    correct: "c",
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    a: "*",
    b: "=",
    c: "==",
    d: "===",
    correct: "b",
  },
  {
    question: "What is the correct way to create a function in JavaScript?",
    a: "function = myFunction()",
    b: "function myFunction()",
    c: "create myFunction()",
    d: "def myFunction()",
    correct: "b",
  },
  {
    question: "Which CSS property changes the text color?",
    a: "font-color",
    b: "text-color",
    c: "color",
    d: "background-color",
    correct: "c",
  },
  {
    question: "Which HTML tag is used for teh largest heading?",
    a: "<heading>",
    b: "<h6>",
    c: "<h1>",
    d: "<head>",
    correct: "c",
  },
];

// Quiz state

let currentQuiz = 0;
let score = 0;

// Functions for quiz
// Load current quiz question

function loadQuiz() {
  // Get DOM elements
  const questionEl = document.getElementById("question");
  const a_text = document.getElementById("a_text");
  const b_text = document.getElementById("b_text");
  const c_text = document.getElementById("c_text");
  const d_text = document.getElementById("d_text");

  // Safety Check - exit if elements not found
  if (!questionEl || !a_text || !b_text || !c_text || !d_text) return;

  // Clear any selected answers from previous question
  deSelectAnswers();

  // Get current question data
  const currentQuizData = quizData[currentQuiz];

  //Update the DOM with questions and answers
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

// Clear all selected radio buttons
function deSelectAnswers() {
  const answerEls = document.querySelectorAll(".answer");
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

// Get the selected answer and map it back to original option ID

function getSelected() {
  const answerEls = document.querySelectorAll(".answer");
  let selectedId;

  // Find which radio button is checked
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      selectedId = answerEl.id;
    }
  });
  return selectedId;
}

// Display final score and reload button

function showResults() {
  const quiz = document.getElementById("quiz");
  if (quiz) {
    const percentage = Math.round((score / quizData.length) * 100);
    let resultMessage = "";

    // Personalized message based on score
    if (percentage >= 80) {
      resultMessage = "Excellent! You really got this! 🎇";
    } else if (percentage >= 50) {
      resultMessage = "Good try! Keep practicing more to improve! 👍";
    } else {
      resultMessage = "Keep learning! Try again to improve your score! 😎";
    }

    quiz.innerHTML = `
           <div class="quiz-header">
               <h2>Quiz Complete!</h2>
               <div class="score-display">
                 <p class="final-score">You answered ${score}/${quizData.length} questions correctly</p>
                 <p class="score-percentage">${percentage}%</p>
                 <p class="result-message">${resultMessage}</p>
               </div>
               <button onclick="location.reload()" class="reload-btn">Try Again</button>
               </div>`;
  }
}

// Browser Initialization

if (typeof document !== "undefined") {
  const quiz = document.getElementById("quiz");
  const submitBtn = document.getElementById("submit");

  if (submitBtn) {
    // Load First Question
    loadQuiz();

    // Add click event to submit button
    submitBtn.addEventListener("click", () => {
      const answer = getSelected();

      if (answer) {
        // Check if answer is correct
        if (answer === quizData[currentQuiz].correct) {
          score++;
        }

        // Move to next question
        currentQuiz++;

        // Load next question or show results
        if (currentQuiz < quizData.length) {
          loadQuiz();
        } else {
          showResults();
        }
      } else {
        // Alert user if no answer selected
        alert("Please select an answer before continuing!");
      }
    });
  }
}

// Exports for Jest testing

if (typeof module !== "undefined") {
  module.exports = {
    quizData,
    loadQuiz,
    deSelectAnswers,
    getSelected,
    showResults,
  };
}
