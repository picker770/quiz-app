# Quiz App

The **Quiz App** is a simple browser-based quiz built with vanilla HTML, CSS , and JavaScript. It presents a set of questions and allows users to answer them and see their performance at the end. The project focuses on clear structure, basic interactivity, and testable quiz logic.

![Mockups](/assets/docs/img/multi-device-website-generator.png)

Source: [Techsini Multi Device Website Mockup Generator](https://techsini.com/multi-mockup/index.php?url=https://picker770.github.io/quiz-app/)

---

## UX

The aim of this project is to create **simple, interactive quiz application** that would:

- Lets users begin answering questions quickly.
- Offers instant visual feedback after answers(forthcoming).
- Shows users how they did at the end of the quiz (forthcoming).
- Works on desktop, tablet, and mobile devices.

### Color Scheme

- #e1e8df - Page background(light, soft greenish-gray).
- #8e44ad - Primary accent (buttons, headers, quiz highlights).
- #5e3370 - Darker accent for hover and focus states.
- #732d91 - Hover state for buttons (slightly brighter lift effect).
- #ffffff - Main content background (quiz container) and text in headers.
- White text (#ffffff) on purple header gradient for readability.

---

## User Stories

### New Users

- As a user, I want to start the quickly so I can begin testing my knowledge.
- As a user, I want clearly labelled questions and answers so I don't get confused.
- As a user, I want to see my score at the end so I know how well I did.

### Returning Users

- As a user, I want to replay the quiz to improve my score.
- As a user, I want the app to be responsive so it feels good on phone and laptop screens.

---

## Wireframes

 To follow best practices , wireframes are developed for mobile, tablet , and desktop sizes.

 ### Mobile wireframe

 <details>
 <summary>Click here to see the mobile wireframe</summary>

 - ![screenshot](/assets/docs/wireframes/mobile.png)

 </details>

 ### Tablet wireframe

 <details>
 <summary>Click here to see the tablet wireframe</summary>

 - ![screenshot](/assets/docs/wireframes/tablet.png)

 </details>

 ### Desktop wireframe

 <details>
 <summary>Click here to see the desktop wireframe</summary>

 - ![screenshot](/assets/docs/wireframes/desktop.png)

 </details>

 ---

 ## Features

 ### Question Data Structure

 - Quiz questions are stored in a JavaScript object using key-value pairs.
 - Each question contains four possible answers and a defined correct option.
 - The structure makes it easy to add, remove, or update questions.

 ### Dynamic Question Rendering

 - Questions and answer options are injected into the DOM using JavaScript.
 - The same HTML structure is reused for each question to keep the markup clean.

 ### Answer Selection

 - Users select answers using radio buttons.
 - Only one answer can be selected per question.

 ### Score Logic

 - The application tracks the user's score as they progress through the quiz.
 - The final score is calculated based on correct answers.

 ### Button Interactions

 - A submit button is used to confirm the selected answer.
 - Visual hover and focus states provide clear feedback for interaction.

 ### Responsive Layout

 - The layout adapts to smaller screens using CSS media queries.
 - The quiz remains usable on mobile, table, and desktop devices.

 ### Unit Testing with Jest

 - Quiz data is tested to ensure each question includes valid answers.
 - Tests confirm that correct answers match one of the available options.

 ---

 ## Future Features

 - ### End Screen Summary
 Add a dedicated results screen showing the user's final score and total questions, with a clear option to restart the quiz.

 - ### Answer Feedback States
 Highlight correct and incorrect answers after submission using color cues and messages to improve clarity and learning.

 - ### Question Progress Indicator
 Display the current question number(for example, "Question 2 of 4") so users know their progress.

 - ### Question Randomisation
 Shuffle questions on each quiz attempt to make replays less predictable.

 - ### Local Storage Support
 Save the user's last score or best score using browser local storage.

 - ### Accessibility Improvements
 Improve keyboard navigation , focus states, and screen-reader support to make the quiz more accessible.

 - ### Expanded Question Set
 Add more questions and categories while keeping the existing data structure intact.

 ---

 ## Tools & Technologies Used

 - [![Git](https://img.shields.io/badge/Git-grey?logo=git&logoColor=F05032)](https://git-scm.com) - version control.
 - [![GitHub](https://img.shields.io/badge/GitHub-grey?logo=github&logoColor=181717)](https://github.com) - repository & hosting.
 - [![HTML](https://img.shields.io/badge/HTML-grey?logo=html&logoColor=E34F26)](https://en.wikipedia.org/wiki/HTML) - structure.
 - [![CSS](https://img.shields.io/badge/CSS-grey?logo=css&logoColor=1572B6)](https://en.wikipedia.org/wiki/CSS) - styling & layout.
 - [![JavaScript](https://img.shields.io/badge/JavaScript-grey?logo=javascript&logoColor=FD7F1E)](https://en.wikipedia.org/wiki/JavaScript) - quiz logic & interactivity.
 - [![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-grey?logo=githubpages&logoColor=222222)](https://pages.github.com) - deployment.

 ---

 ## Testing 

 Automated tests using Jest ensure:
 - Quiz question objects are structured correctly.
 - Each quiz entry includes valid correct answer and distractors.
 - Functions behave as expected when evaluating answers.

 #### For full testing notes, see [question.test.js](/tests/question.test.js)

 ---
