# Quiz App

The **Quiz App** is an interactive, browser-based quiz application built with HTML, CSS, and JavaScript. It presents 12 web development questions and allows users to test their knowledge, receive immediate feedback, and track their progress. The project focuses on accessibility, UX best practices, and clean maintainable code.

![Mockups](/assets/docs/img/multi-device-website-generator.png)

Source: [Techsini Multi Device Website Mockup Generator](https://techsini.com/multi-mockup/index.php?url=https://picker770.github.io/quiz-app/)

---

## UX

### Project Purpose

The aim of this project is to create **simple, interactive quiz application** that would:

- Lets users begin answering questions quickly without signup
- Provide clear feedback on quiz performance
- Work seamlessly on desktop, tablet, and mobile devices
- Follow accessibility guidelines for all users 
- Demonstrate clean code structure and testing practices

---

### Color Scheme

- #e1e8df - Page background(light, soft greenish-gray)
- #8e44ad - Primary accent (buttons, headers, quiz highlights)
- #5e3370 - Darker accent for hover and focus states
- #732d91 - Hover state for buttons (slightly brighter lift effect)
- #ffffff - Main content background and text on purple
- #333333 - Footer background

### Typography

**Poppins** font family was chosen for its:
- Excellent readability at various sizes
- Modern, clean appearance
- Good web font support
- Multiple weights for visual hierarchy

---

## User Stories

### New Users
- As a user, I want to understand what the app does immediately - *Addressed by home page hero section*
- As a user, I want to start the quiz quickly without signing up - *One - click access from navigation*
- As a user, I want clearly labelled questions and answers - *Clean radio button layout*
- As a user, I want to see my score at the end - *Final score displayed with percentage*

### Returning Users
- As a user, I want to replay the quiz to improve my score - *Reload button to try again*
- As a user, I want the app to be responsive on all devices - *Fully responsive with mobile navigation*
- As a user, I want to navigate easily between pages - *Consitent navigation bar on all pages* 

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

 ### Current Features

 #### ✅ Multi-Page Navigation
 - **Home page** - Introduction , features, and value proposition
 - **Quiz page** - The interactive quiz with 12 questions
 - **About page** - Project documentation and UX process
 - Consistent navigation with active page highlighting
 - Mobile-responsive hamburger menu with smooth slide animation

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

 #### For full testing documentation, see [TESTING.md](/TESTING.md)

 ---

## Deployment

The app was deployed to **GitHub pages**:
1. Go to GitHub repo: [Quiz App](https://github.com/picker770/quiz-app).
2. Navigate to **Settings > Pages**.
3. Choose the **main branch**, root directory.
4. Save and refresh - site deployed at:
   [Live Site](https://picker770.github.io/quiz-app)

---

### Cloning

You can clone this repository to create a local copy:

git clone "https://github.com/picker770/quiz-app.git"

---

### Forking

You can fork this repository to make a copy under you own GitHub account, allowing you to freely experiment with changes without affecting the original project.

1. Go to the GitHub repository: https://github.com/picker770/quiz-app
2. In the top-right corner , click the **Fork** button.
3. A copy of repository will now exist in your GitHub account.

---

## Credits

Content
- All quiz structure and logic written by me with the help and guidance of Code Institute LMS content and walkthrough projects including tutorial and examples.
- I have found this video very helpful for building the quiz(https://www.youtube.com/watch?v=MgeQa7qXIwI)
- All quiz questions were written manually and inspired by general web development and programming fundamentals.

Media
- Mockup generated by using http://techsini.com/multi-mockup/
- Fonts imported from https://fonts.google.com/
- Favicon by using https://favicon.io/


Acknowledgements
- Thanks to code institute online tutorials and comprehensive reference docs for teaching logic and DOM manipulation.
- README.md layout inspired by Othneil Drew's template(https://github.com/othneildrew/Best-README-Template).