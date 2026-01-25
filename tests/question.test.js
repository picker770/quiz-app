/**
 * @jest-environment jsdom
 */

const { quizData } = require('../scripts/question.js');

test('quizData should contain 4 questions', () => {
  expect(quizData.length).toBe(4);
});