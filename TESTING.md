# Testing - Quiz App

This document outlines the testing carried out for the Quiz Challenge App to ensure correct functionality, layout consistency, accessibility basis, and code reliability.

---

## Code Validation

### HTML

I have use the recommended [HTML W3C validator](https://validator.w3.org) to validate all of my HTML file.

| Directory | File | Link | Screenshot |
| --- | --- | --- | --- |
|  | index.html | [Validate index.html](https://validator.w3.org/nu/?doc=https://picker770.github.io/quiz-app/index.html) | ![screenshot](/assets/docs/img/index.html-testing.png) |
 

 ### CSS

 I have used the recommended [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) to validate all of my CSS files.

 | Directory | File | Link | Screenshot |
 | --- | --- | --- | --- |
 | assets / css | style.css | [Validate style.css](https://jigsaw.w3.org/css-validator/validator?uri=https://picker770.github.io/quiz-app/assets/css/style.css) | ![screenshot](/assets/docs/img/style.css-testing.png) |


 ### JavaScript Validation
 
 I have used the recommended [JSHint](https://jshint.com/) to validate my JS file.
 | Directory | File | Link | Screenshot |
 | --- | --- | --- | --- |
 | scripts / js | question.js | [Validate question.js](https://jshint.com) | ![screenshot](/assets/docs/img/question.js-testing.png) |

 ---


 ## Lighthouse Testing (Chrome DevTools)

 Lighthouse audits were run on the deployed site.

 | Category        | Score | Screenshot |
 |-----------------|-------|------------|
 | Performance      | 98%  |![Performance](/assets/docs/lighthouse/performance.png) |
 | Accessibility    | 97%  |![Accessibility](/assets/docs/lighthouse/accessibility.png) |
 | Best Practices   | 100% |![Performance](/assets/docs/lighthouse/bestpractices.png) |
 | SEO              | 100%  |![Performance](/assets/docs/lighthouse/seo.png) |

 *(Scores may vary slightly by device/network.)*

 ---

 ## Responsiveness

 - Tested using Chrome DevTools:
  - **Mobile:** 
    - 320px - 480px
    - Content stacks vertically
    - No overflow or clipped elements
  - **Tablet** 
    - 768px
    - Layout remains centered
    - Font sizes adjust smoothly
  - **Desktop** 
    - 1024px and above
    - Header and quiz container aligned consistently

### Screenshots
| Device / View            | Screenshot |
|--------------------------|------------|
| Mobile - Quiz Question   |![Mobile quiz](/assets/docs/img/mobile-view.png) |
| Tablet - Score           |![Tablet quiz](/assets/docs/img/tablet-score-view.png) |
| Desktop - Quiz layout    |![Desktop quiz](/assets/docs/img/desktop-view.png) |

---

## Manual Testing

### Navigation and Flow

 - Quiz loads automatically on page load
 - Clicking Submit without selecting an answer does nothing
 - Selecting an answer and submitting:
   - Advances to the next question
   - Increments score if correct
- Final screen shows score and reload button
- Reload button resets the quiz

### Quiz Behavior

- Only one answer can be selected at a time
- Answers reset when a new question loads
- Score increments only for the correct answers
- Quiz ends cleanly after teh final question

---

## Test Cases (Sample)

|Feature  | Step(s)                | Screenshot | Expected | Actual | Pass |
|---------|------------------------|------------|----------|--------|------|
|Load Quiz| Open the app in browser|![Load](/assets/docs/img/test-cases/load.png)| Quiz loads with first question | As expected | ✅|
|Select Answer| Click on one option|![Load](/assets/docs/img/test-cases/select-answer.png)| Option is selected and locked | As expected | ✅|
|Submit Answer| Click submit|![Load](/assets/docs/img/test-cases/submit-answer.png)| Answer is processed and next question loads | As expected | ✅|
|End of Quiz| Answer Last Question|![Load](/assets/docs/img/test-cases/end-of-quiz.png)| Final score displayed with reload option | As expected | ✅|
|Restart Quiz| Click reload button|![Load](/assets/docs/img/test-cases/load.png)| Quiz resets to first question, score cleared| As expected | ✅|


---


## Accessibility Testing

 Manual accessibility checks were performed:

 - Labels correctly associated with radio inputs
 - Buttons are keyboard focusable
 - Text contrast is readable against background colors
 - Page usable with keyboard navigation
 - Focus states visible on interactive elements

 ---

 
