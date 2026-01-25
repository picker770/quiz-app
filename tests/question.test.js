const { add } = require('../scripts/question.js');

test('add function works', () => {
  expect(add(2, 3)).toBe(5);
  expect(add(-1, 1)).toBe(0);
  expect(add(10, 20)).toBe(30);
});