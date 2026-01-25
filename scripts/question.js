

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
];

// Quiz state

let currentQuiz = 0;
let score = 0;


// Functions for quiz

function loadQuiz () {
  const questionEl = document.getElementById('question');
  const a_text = document.getElementById('a_text');
  const b_text = document.getElementById('b_text');
  const c_text = document.getElementById('c_text');
  const d_text = document.getElementById('d_text');

  if (!questionEl || !a_text || !b_text || !c_text || !d_text) return;

  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  const answerEls = document.querySelectorAll('.answer');
  answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
  const answerEls = document.querySelectorAll('.answer');
  let answer;
  answerEls.forEach(answerEl => {
      if (answerEl.checked) answer = answerEl.id;
  });

    return answer;
}

// Browser Initialization

if (typeof document !== 'undefined') {
   const quiz = document.getElementById('quiz');
   const submitBtn = document.getElementById('submit');

   if (submitBtn) {
      loadQuiz();

       submitBtn.addEventListener('click', () => {
          const answer = getSelected();

          if(answer) {
            if (answer === quizData[currentQuiz].correct) score++;

            currentQuiz++;

            if(currentQuiz < quizData.length) {
                loadQuiz();
            } else {
                if(quiz) {
                    quiz.innerHTML = `
                    <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                    <button onclick="location.reload()">Reload</button>
                    `;
                }
            }
          }
       });
   }

}

// Exports for testing

module.exports = { quizData };