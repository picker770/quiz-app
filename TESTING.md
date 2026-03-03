# Testing - Quiz App

This document outlines the testing carried out for the Quiz Challenge App to ensure correct functionality, layout consistency, accessibility basis, and code reliability. Both **automated** and **manual** testing approaches were used throughout development.

---

## Testing Approach

### Automated Testing

**Framework**: Jest with JSDOM

**Test #Files**: `question.test.js`

**What is tested automatically:**
- ✅ Quiz data structure validation (12 questions with required properties)
- ✅ Score calculation logic for perfect, partial, and zero scores
- ✅ Answer selection detection
- ✅ DOM updates on quiz load
- ✅ deSelectAnswers function clears radio buttons
- ✅ getSelected returns correct answer object
- ✅ showResults creates proper result display

## Manual Testing

**What is tested manually**
- ✅ User experience and visual layout
- ✅ Real-world usage scenarios
- ✅ Edge cases and unexpected user behavior
- ✅ Cross-browser and cross-device compatibility
- ✅ Accessibility with screen readers
- ✅ Keyboard navigation

---

## What is Testing?

Testing is the process of evaluating a software application to ensure it behaves as expected, meets requirements, and is free from defects. In web development, testing helps verify that code works correctly across different browsers, devices, and user scenarios. Testing improves code quality, reduce bugs, and enhances user experience.

### Types of Testing

#### Unit Testing

**Definition** Unit testing involves testing individual components or functions of the code in isolation to ensure each part works correctly on its own.

**In this project:**
- Each quiz function is tested independently (`loadQuiz()`, `getSelected()`, `showResults()`)
- Tests verify that functions return expected outputs for given inputs
- Jest framework is used to run unit tests automatically

#### Automated Testing

Automated testing uses scripts and testing frameworks to run tests automatically without human intervention. Tests can be run repeatedly, ensuring consistent results and saving time during development.

**In this project**
- Jest is used for automated JavaScript testing
- Tests run with a single command: `npm test`

#### Manual Testing

Manual testing involves a human interacting with the application to verify functionality, usability, and visual appearance. It tests real-world scenarios that automated tests might miss.

**In this project**
- Visual layout
  + Appearance on different screen sizes
- User Experience
  + Ease of navigation and interaction 
- Browser Compatibility
  + Chrome, Firefox, Safari, Edge, Opera
- Device Testing
  + Mobile, tablet, desktop

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

## Browser Compatibility

| Browser | Screenshot | Result |
|---------|------------|--------|
| Chrome  | ![Chrome](/assets/docs/img/browser-testing/chrome.png)| ✅ Work as expected |
| Edge    | ![Edge](/assets/docs/img/browser-testing/edge.png)| ✅ Work as expected |
| Firefox  | ![Firefox](/assets/docs/img/browser-testing/firefox.png)| ✅ Work as expected |
| Safari  | ![Safari](/assets/docs/img/browser-testing/safari.png)| ✅ Work as expected |
| Opera  | ![Opera](/assets/docs/img/browser-testing/opera.png)| ✅ Work as expected |


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
|Select Answer| Click on one option|![Load](/assets/docs/img/test-cases/select-answer.png)| Option is selected | As expected | ✅|
|Submit Answer| Click submit|![Load](/assets/docs/img/test-cases/submit-answer.png)| Answer is processed and next question loads | As expected | ✅|
|End of Quiz| Answer Last Question|![Load](/assets/docs/img/test-cases/end-of-quiz.png)| Final score displayed with reload option | As expected | ✅|
|Restart Quiz| Click reload button|![Load](/assets/docs/img/test-cases/load.png)| Quiz resets, score cleared| As expected | ✅|


---


## Accessibility Testing

 Manual accessibility checks were performed:

 - Labels correctly associated with radio inputs
 - Buttons are keyboard focusable
 - Text contrast is readable against background colors
 - Page usable with keyboard navigation
 - Focus states visible on interactive elements

 ---

## Bugs and Fixes

### Bugs Fixed
Throughout development, several bugs were identified and fixed:

| Bug | Description | Fix |
|-----|-------------|-----|
| **Radio Buttons not clearing** | Previously selected answered remained checked when loading a new question | Implemented `deSelectAnswers()` inside `loadQuiz()` to reset all radio buttons |
| **getSelected returning incorrect values** | Function did not handle case where where no option was selected | Update logic to return null when no radio input is checked |
| **Score Calculation bug** | Quiz showed wrong score (e.g., 3/12 when all answers correct) | Fixed answer mapping logic to properly track correct answers after randomization |
| **Hamburger menu not working** | Mobile menu would not open when clicking hamburger icon | Fixed JavaScript event listeners and CSS transitions |
| **No 404 page** | Users saw GitHub's default error page | Created custom 404.html with auto-direct to homepage |
| **Only 4 questions** | Limited content for users | Expanded question set from 4 to 12 questions |
| **Missing Navigation** | No way to navigate between pages | Add navbar with home, quiz, and about pages |
| **Active page not highlighted** | Users did not know which page they were on | Added active state styling to navigation links with JavaScript |
| **Jest test syntax error** | Test failed due to missing closing slash in regex pattern | Added missing `/` and corrected regex pattern in `question.test.js` |
| **Logo not rounded** | Navigation logo had sharp edges | Added `border-radius: 50%` to nav-logo class |
| **Images missing** | Site had no visual elements | Added hero image, about image, and logo |
| **Responsive issues on small devices** | Text too small on 320px screens | Added additional media query for under 480px |
| **ARIA labels missing** | SEO warning for links without descriptive text | Added aria-label to all navigation links |

## Known Issues

The following issues are acknowledged and will be addressed in futute updates:

| Issue | Description | Planned Fix |
|-------|-------------|-------------|
| **No persistent score storage** | Page reloads resets progress | Implement local storage for high scores |
| **No ARIA live regions** | Screen readers do not announce question changes | Add ARIA live regions for dynamic content |
| **No visual feedback for correct/incorrect answers** | Users do not know if answer was right untill the end | Add color-coded feedback after each submission |
| **No progress indicator** | Users do not know which question they are on | Add "Question X of 12" indicator |
| **Limited question test** | Only 12 questions available | Expand to multiple categories with external JSON |



  ## User Story Testing

  ### New Users

  | User story | Test | Result |
  |------------|------|--------|
  | I want to understand what the app does immediately | View home page hero section | ✅ Clear explanation of app purpose |
  | I want to start the quiz quickly without signing up | Click start Quiz button | ✅ Immediate access, no login |
  | I want clearly labelled questions and answers | Take quiz | ✅ Radio buttons clearly labelled |
  | I want to see my score at the end | Complete quiz | ✅ Score with percentage displayed |

  ### Returning Users 
  | User Story | Test | Result |
  |------------|------|--------|
  | I want to replay the quiz to improve my score | Click reload button | ✅ Quiz restarts immediately |
  | I want to see different question orders each time | Take quiz multiple times | ✅ Answers randomized each time |
  | I want the app to be responsive on all devices | Test on phone, tablet, desktop | ✅ Works perfectly on all devices |
  | I want to navigate easily between pages | Use navigation bar | ✅ Consistent nav on all pages |

  ### Accessibility Needs

  | User Story | Test | Result |
  |------------|------|--------|
  | I want sufficient color contrast | Check with contrast tool | ✅ 7.1:1 ratio |
  | I want to navigate without a mouse | Use keyboard only | ✅ Full keyboard navigation |


 ---

 ## Conclusion

 The **Quiz App** functions reliably and meets core project requirements. The application logic is covered by automated testing, user interface behavior has been manually verified, and known limitations are clearly identified for future improvement.
 This testing approach ensures confidence in both functionality and code quality while leaving room for future enhancements such as accessibility improvements, scoring persistence, and UI feedback.

