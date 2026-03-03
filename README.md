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

#### Accessibility Needs
- As a user with visual impairment, I want sufficient color contrast | Colors tested with contrast checker (7.1:1 ratio)
- As a keyboard user, I want to navigate without a mouse | Full keyboard navigation with visible focus states
- As s screen reader user , I want semantic HTML | Porper heading structure, ARIA labels, alt text

---

### Design Process

The design followed a **user-centered approach** with these key principles:

| UX Principle  |  Application in Quiz App  |
|---------------|---------------------------|
| **Visibility of System Status**  | Users see current question, score up dates in real-time  |
| **Match with Real World**  | Familiar quiz format with radio buttons and submit button  |
| **User Control & Freedom**  | Can change answers befor submitting, restart after finishing  |
| **Consistency & Standards**  | Same layout throughout quiz, consistent navigation across pages  |
| **Error Prevention**  | Alert if user tries to submit without selecting an answer  |
| **Recognition vs Recall**  | All options visible at once, no need to memorize previous answers  |

---

# Wireframes

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
 - ARIA labels for improved accessibility

 #### ✅ Expanded Question Set
 - 12 multiple-choice questions on web development fundamentals
 - Topics include HTML, CSS, and JavaScript

 #### ✅ Answer Randomization
 - Answers appear in different order each time
 - Prevents users from memorizing answer positions
 - Encourages genuine learning

 #### ✅ Interactive Quiz
 - Dynamic question rendering from JavaScript data structure
 - Radio button selection with clear visual feedback
 - Cannot proceed without selecting an answer
 - Final score displayed with percentage and personalized message

 #### ✅ Score Tracking
 - Real-time score calculation as users progress
 - Final score shows correct answers out of 12
 - Percentage calculated and displayed

 #### ✅ Accessibility Features
 - Semantic HTML (header, nav, main, section, footer)
 - Full keyboard navigation with visible focus states
 - High color contrast
 - Alt text for all images
 - ARIA labels on navigation links
 - Screen reader compatible
 - Focus indicators on all interactive elements

 #### ✅ Responsive Design
 - Mobile-first approach with media queries
 - Flexbox and grid layouts
 - Touch-friendly button sizes
 - Optimized for all screen sizes from 320px to 4k
 - Hamburger menu for mobile devices

 #### ✅ Visual Elements
 - Logo (quiz-icon.png) with rounder corners
 - Form validation (must select answer before proceeding)
 - Graceful fallbacks for missing elements
 - Console error checking during development

 #### ✅ Unit Testing with Jest
 - Quiz data structure validation
 - Score calculation logic testing
 - Answer selection detection
 - DOM updates verification
 - 100% pass rate on all tests


 ---

 ### Future Features

 |Feature | Description | Priority |
 |--------|-------------|----------|
 | **Question Categories** | Seperate quizzes for HTML, CSS , JavaScript | High |
 | **Local Storage** | Save high scores and track progress over time | High |
 | **Progress Indicator** | Show "Question 5 of 12" during quiz | Medium |
 |**Answer Feedback** | Highlight correct/incorrect answers after submission | Medium |
 | **Timed Mode** | Add timer for extra challenge | Low |
 | **Share Results** | Share scores on social media | Low |
 | **External Data Source** | Load questions from JSON for easy expansion | Low | 

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

For full testing documentation, including:
- Code validation (HTML, CSS , JavaScript)
- Lighthouse audits
- Responsiveness testing
- Browser compatibility
- Manual testing
- Automated testing with Jest
- Accessibility testing
- User story testing
- **Bugs fixed througout development**

 #### For full testing documentation,  please see [TESTING.md](/TESTING.md)

 ---

## Deployment

The app was deployed to **GitHub pages**:

### Live Site 
[https://picker770.github.io/quiz-app/](https://picker770.github.io/quiz-app/)


### Deployment Process

1. **Prepare the repository**
   ```bash
   git add .
   git commit - m "Prepare for deployment"
   git push origin main

2. **configure GitHub Pages**
 - Go to your GitHub repository: https://github.com/picker770/quiz-app
 - Click on the settings tab
 - In the left sidebar, click on Pages
 - Under "Branch", select:
    + **Branch**: main
    + **Floder**: / (root)
 - Click **Save**
 - Wait 2 - 3 minutes for deployment

3. **Verify deployment**
 - Visit https://picker770.github.io/quiz-app/
 - Test all functionality:
   + Navigation between pages
   + Quiz functionality with 12 questions
   + Responsive design on mobile view
   + 404 page by visiting invalid URL
 - Check browser console for errors

4. **Troubleshooting**:
 - If styles do not load: Check paths are relative (not absolute)
 - If JavaScript does not work: Verify script paths in HTML
 - If images do not appear: Confirm file names and paths
 - Use browser DevTools to debug any issues    

---

## Local Development

### Clone the repository

You can clone this repository to create a local copy:

```bash
git clone "https://github.com/picker770/quiz-app.git"

```
### Navigate to project directory

```bash
cd quiz-app

```

### Open in browser

Simply open home.html in your preffered browser:
- Double click the fike, or 
- Use Live Server in VS Code, or 
- Run python 
```bash
   python -m http.server 
   ```
   and visit localhost:8000

### Run tests

```bash
   npm install
   npm test
```
No build process or dependencies required - the app runs entirely in the browser!

### Cloning

- You can clone this repository to create a local copy:
```bash
   git clone https://github.com/picker770/quiz-app.git
```

### Forking

You can fork this repository to make a copy under you own GitHub account, allowing you to freely experiment with changes without affecting the original project.

1. Go to the GitHub repository: https://github.com/picker770/quiz-app
2. In the top-right corner , click the **Fork** button.
3. A copy of repository will now exist in your GitHub account.

---

### Credits

Content
- All quiz structure and logic written by me with the help and guidance of Code Institute LMS content and walkthrough projects including tutorial and examples.
- I have found this video very helpful for building the quiz(https://www.youtube.com/watch?v=MgeQa7qXIwI)
- All quiz questions were written manually and inspired by general web development and programming fundamentals.

Media
- Mockup generated by using http://techsini.com/multi-mockup/
- Fonts imported from https://fonts.google.com/
- Favicon by using https://favicon.io/
- Images - https://unsplash.com/


Acknowledgements
- Thanks to code institute online tutorials and comprehensive reference docs for teaching logic and DOM manipulation.
- README.md layout inspired by Othneil Drew's template(https://github.com/othneildrew/Best-README-Template).