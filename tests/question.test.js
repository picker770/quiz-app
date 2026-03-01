/**
 * @jest-environment jsdom
 */

const { quizData, loadQuiz, deSelectAnswers, getSelected, showResults } = require('../scripts/question.js');

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

        // Reset Global state
        window.optionACorrect = false;
        window.optionBCorrect = false;
        window.optionCCorrect = false;
        window.optionDCorrect = false;
    });

    // Quiz Data Structure Tests


    describe('Quiz Data Structure', () => {

        // Ensure quiz data exists and its iterable
        test('quizData exists and is an array', () => {
            expect(quizData).toBeDefined();
            expect(Array.isArray(quizData)).toBe(true);
        });


        //   Validate expected number of questions
        test('quizData has 12 questions', () => {
            expect(quizData.length).toBe(12);
        });
        //  Validate shape and data types of each question object
        test('each question has required properties', () => {
            quizData.forEach(question => {
                //    Must have question text and options
                expect(question).toHaveProperty('question');
                expect(question).toHaveProperty('a');
                expect(question).toHaveProperty('b');
                expect(question).toHaveProperty('c');
                expect(question).toHaveProperty('d');
                expect(question).toHaveProperty('correct');
                expect(['a', 'b', 'c', 'd']).toContain(question.correct);

                // Check types
                expect(typeof question.question).toBe('string');
                expect(typeof question.a).toBe('string');
                expect(typeof question.b).toBe('string');
                expect(typeof question.c).toBe('string');
                expect(typeof question.d).toBe('string');
                expect(typeof question.correct).toBe('string');

            });
        });
    });

    // Question content validation 

    describe('Question Content Validation', () => {

        test('first question should be about JavaScript', () => {
            const question = quizData[0];
            expect(question.question).toBe("Which language runs in a web browser?");
            expect(question.a).toBe("Java");
            expect(question.b).toBe("C");
            expect(question.c).toBe("Python");
            expect(question.d).toBe("JavaScript");
            expect(question.correct).toBe("d");
        });

        test('second question should be about CSS', () => {
            const question = quizData[1];
            expect(question.question).toBe("What does CSS stand for?");
            expect(question.a).toBe("Central Style Sheets");
            expect(question.b).toBe("Cascading Style Sheets");
            expect(question.c).toBe("Cascading Simple Sheets");
            expect(question.d).toBe("Counting Style Sheets");
            expect(question.correct).toBe("b");
        });

        test('third question should be about HTML', () => {
            const question = quizData[2];
            expect(question.question).toBe("What does HTML stand for?");
            expect(question.a).toBe("Hypertext Markup Language");
            expect(question.b).toBe("Hypertext Markdown Language");
            expect(question.c).toBe("Hyperloop Machine Language");
            expect(question.d).toBe("Highertext Madeup Language");
            expect(question.correct).toBe("a");
        });

        test('fourth question should be about JavaScript launch year', () => {
            const question = quizData[3];
            expect(question.question).toBe("What year was JavaScript launched?");
            expect(question.a).toBe("1996");
            expect(question.b).toBe("1995");
            expect(question.c).toBe("1994");
            expect(question.d).toBe("none of the above");
            expect(question.correct).toBe("b");
        });
    });

    // Answer Checking Logic

    describe('Answer Checking Logic', () => {

        // Validate correct answers
        test('should identify correct answers for all questions', () => {
            const correctAnswers = ['d', 'b', 'a', 'b', 'b', 'b', 'a', 'c', 'b', 'b', 'c', 'c'];
            quizData.forEach((question, index) => {
                expect(question.correct).toBe(correctAnswers[index]);
            });
        });

        // Simulate a perfect quiz attempt

        test('perfect score calculation', () => {
            const userAnswers = ['d', 'b', 'a', 'b', 'b', 'b', 'a', 'c', 'b', 'b', 'c', 'c'];
            let score = 0;
            quizData.forEach((question, index) => {
                if (userAnswers[index] === question.correct) score++;
            });
            expect(score).toBe(12);
        });

        // Simulate partially correct answers

        test('partial score calculation', () => {
            const userAnswers = ['d', 'a', 'c', 'd', 'a', 'c', 'b', 'a', 'c', 'a', 'b', 'a']; // mix of correct/incorrect
            let score = 0;
            quizData.forEach((question, index) => {
                if (userAnswers[index] === question.correct) score++;
            });
            expect(score).toBe(1);
        });

        // Simulate all incorrect answers

        test('zero score calculation', () => {
            const userAnswers = ['a', 'a', 'b', 'c', 'a', 'a', 'b', 'a', 'a', 'a', 'a', 'a']; // all wrong
            let score = 0;
            quizData.forEach((question, index) => {
                if (userAnswers[index] === question.correct) score++;
            });
            expect(score).toBe(0);
        });
    });

    // Score Display Formatting

    describe('Score Display Formatting', () => {

        // Ensure score message follows expected format
        test('final score message format', () => {
            const score = 3;
            const totalQuestions = quizData.length;
            const message = `You answered ${score}/${totalQuestions} questions correctly`;
            expect(message).toBe("You answered 3/12 questions correctly");
        });

        test('perfect score message', () => {
            const score = quizData.length;
            const message = `You answered ${score}/${quizData.length} questions correctly`;
            expect(message).toBe("You answered 12/12 questions correctly");
        });

        test('zero score message', () => {
            const score = 0;
            const message = `You answered ${score}/${quizData.length} questions correctly`;
            expect(message).toBe("You answered 0/12 questions correctly");
        });
    });

    //  DOM Function Tests

    describe('Function Tests', () => {
        test('loadQuiz sets question text', () => {
            loadQuiz();
            expect(document.getElementById('question').innerText).toBe('Which language runs in a web browser?');
            expect(document.getElementById('a_text').innerText.length).toBeGreaterThan(0);
            expect(document.getElementById('b_text').innerText.length).toBeGreaterThan(0);
            expect(document.getElementById('c_text').innerText.length).toBeGreaterThan(0);
            expect(document.getElementById('d_text').innerText.length).toBeGreaterThan(0);
        });

        // Ensure radio buttons are reset between questions

        test('getSelected returns correct object when answer selected', () => {
            //   Set up mock correct answers
            window.optionACorrect = true;

            const inputs = document.querySelectorAll('.answer');
            inputs[0].checked = true; // select 'a'

            const result = getSelected();
            expect(result).toBeDefined();
            expect(result.selectedId).toBe('a');
            expect(result.isCorrect).toBe(true);
        });

        test('getSelected returns null when no answer selected', () => {
            const result = getSelected();
            expect(result).toBeNull();
        });
    });

    // Test showResults function
    describe('showResults function', () => {
        test('showResults create result display', () => {
            // Mock the quiz container
            const quizDiv = document.getElementById('quiz');

            // Call showResults
            showResults();

            // Check that innerHTML was updated
            expect(quizDiv.innerHTML).toContain('Quiz Complete!');
            expect(quizDiv.innerHTML).toContain('reload-btn');
            expect(quizDiv.innerHTML).toContain('questions correctly');
        });

        test('showResults displays correct score format', () => {
            const quizDiv = document.getElementById('quiz');

            showResults();

            expect(quizDiv.innerHTML).toMatch(/answered \d\/12 questions correctly/);
        });
    });

});