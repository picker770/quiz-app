/**
 * @jest-environment jsdom
 */

const { quizData, loadQuiz, deSelectAnswers, getSelected } = require('../scripts/question.js');

describe('Quiz App Tests', () => {
    
    beforeEach(() => {
      document.body.innerHTML = `
       <div class="quiz-container" id="quiz">
        <div class="quiz-header">            
             <h2 id="question"></h2>
             <ul>                
                 <li>
                    <input type="radio" name="answer" id="a" class="answer">
                    <label for="a" id="a_text"></label>
                 </li>
                 <li>
                    <input type="radio" name="answer" id="b" class="answer">
                    <label for="b" id="b_text"></label>
                 </li>
                 <li>
                    <input type="radio" name="answer" id="c" class="answer">
                    <label for="c" id="c_text"></label>
                 </li>
                 <li>
                    <input type="radio" name="answer" id="d" class="answer">
                    <label for="d" id="d_text"></label>
                 </li>
             </ul>
        </div>        
         <button id="submit"></button>
      </div>
      `;
    });


describe('Quiz Data Structure', () => {
    test('quizData exists and is an array', () => {
        expect(quizData).toBeDefined();
        expect(Array.isArray(quizData)).toBe(true);
    });

    test('quizData has 4 questions', () => {
        expect(quizData.length).toBe(4);
    });

    test('each question has required properties', () => {
        quizData.forEach(q => {
              expect(q).toHaveProperty('question');
              expect(q).toHaveProperty('a');
              expect(q).toHaveProperty('b');
              expect(q).toHaveProperty('c');
              expect(q).toHaveProperty('d');
              expect(q).toHaveProperty('correct');
              expect(['a','b','c','d']).toContain(q.correct);
        });
    });
});

describe('Function Tests', () => {
    test('loadQuiz sets question and answers', () => {
        loadQuiz();
        expect(document.getElementById('question').innerText).toBe('Which language runs in a web browser?');
        expect(document.getElementById('a_text').innerText).toBe('Java');
        expect(document.getElementById('b_text').innerText).toBe('C');
        expect(document.getElementById('c_text').innerText).toBe('Python');
        expect(document.getElementById('d_text').innerText).toBe('JavaScript');
    });

    test('deSelectAnswers clears all radio buttons', () => {
          const inputs = document.querySelectorAll('.answer');
          inputs.forEach(el => el.checked = true);
          deSelectAnswers();
          inputs.forEach(el => expect(el.checked).toBe(false));
    });
});

  test('getSelected returns selected radio id', () => {
      const inputs = document.querySelectorAll('.answer');
      inputs[2].checked = true; // select 'c'
      expect(getSelected()).toBe('c');
      inputs.forEach(el => el.checked = false);
      expect(getSelected()).toBeUndefined();
  });

});