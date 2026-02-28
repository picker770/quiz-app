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
let currentQuestionCorrectAnswer = ""; // Store correct answer for current question

// Functions for quiz
// Load current quiz question with randomized answers
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

  // Store the correct answer for this question
  currentQuestionCorrectAnswer = currentQuizData.correct;

  // Create array of options with their original IDs
  const options = [
    {id: 'a', text: currentQuizData.a, isCorrect: currentQuizData.correct === 'a'},
    {id: 'b', text: currentQuizData.b, isCorrect: currentQuizData.correct === 'b'},
    {id: 'c', text: currentQuizData.c, isCorrect: currentQuizData.correct === 'c'},
    {id: 'd', text: currentQuizData.d, isCorrect: currentQuizData.correct === 'd'}
  ];

  // Shuffle the array 
  for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
  }

  //Update the DOM with randomized answers
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = options[0].text;
  b_text.innerText = options[1].text;
  c_text.innerText = options[2].text;
  d_text.innerText = options[3].text;

  // Store which option IDs are correct for this question
  window.optionACorrect = options[0].isCorrect;
  window.optionBCorrect = options[1].isCorrect;
  window.optionCCorrect = options[2].isCorrect;
  window.optionDCorrect = options[3].isCorrect;

  console.log("Question loaded. Correct answer should be one of the options.");
}

// Clear all selected radio buttons
function deSelectAnswers() {
  const answerEls = document.querySelectorAll(".answer");
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

// Get the selected answer and check if it is correct

function getSelected() {
  const answerEls = document.querySelectorAll(".answer");
  let selectedId;

  // Find which radio button is checked
  for (let i = 0; i < answerEls.length; i++) {
    if (answerEls[i].checked) {
      const selectedId = answerEls[i].id;

      // Check if the selected option is correct
      let isCorrect = false;
      if (selectedId === 'a' && window.optionACorrect) isCorrect = true;
      else if (selectedId === 'b' && window.optionBCorrect) isCorrect = true;
      else if (selectedId === 'c' && window.optionCCorrect) isCorrect = true;
      else if (selectedId === 'd' && window.optionDCorrect) isCorrect = true;

      console.log("Selected:", selectedId, "Is correct:", isCorrect);
      return {selectedId, isCorrect};
    }
  }
   return null; // Nothing selected
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
      const result = getSelected();

      if (result) {
        // Check if answer is correct
        if (result.isCorrect) {
          score++;
          console.log("Score increased to:", score);
        } else {
          console.log("Wrong answer. store still:", score);
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
