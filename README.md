# react-dev-formative-1

## Formative Assessment: React "Mini Blog" Project

**Submission:** Canvas Submission (link to your GitHub repository)

**Grading:** This project will contribute to your overall participation and formative assessment grade. Feedback will be provided to guide your learning.

### Scenario:

You are a junior developer at a startup called "Dev Insights." They want to create an internal "Mini Blog" platform where employees can share quick tips, insights, and updates related to web development. Your task is to build the foundation of this platform using React, demonstrating your understanding of TypeScript, Vite, components, styling, and optimization learned in the first three weeks. Please do not use any templates for this assesment.

### Project Requirements:

**1. Project Setup (Vite & TypeScript):**

*   Initialize a new React project using **Vite** with TypeScript support. Use the following command in your terminal:
    ```bash
    npm create vite@latest mini-blog -- --template react-ts
    cd mini-blog
    npm install
    ```
*   Ensure your project has a proper directory structure for components, styles, and potentially utility functions.

**2. Core Components (React Basics & Component Types):**

*   **Header Component:**
    *   A functional component displaying the "Dev Insights" logo (you can use a text-based logo for simplicity) and a navigation link to "New Post" (this link doesn't need to be functional for now).
*   **PostList Component:**
    *   A component that displays a list of blog posts. Initially, you can hardcode an array of 2-3 sample posts within this component.
    *   Each post in the list should display:
        *   Title
        *   Author (Name)
        *   A short preview (first few words of the content)
        *   Date posted (you can hardcode a date for now)
    *   Make sure to use propper types in typescript for the post object. (Week 1)
*   **Post Component:**
    *   A reusable component that renders a single blog post's details (title, author, content preview, date).
    *   Decide whether to use a functional or a class component for this, and justify your choice in the README file based on what you learned in Week 3.
*   **App Component:**
    *   The root component that renders the `Header` and `PostList` components.

**3. Styling (CSS & Styling Techniques):**

*   Apply styling to your components using at least **two** of the following methods: (Week 3)
    *   External CSS files
    *   Inline styles
    *   Styled Components (or any other CSS-in-JS library)
*   Implement conditional styling for at least one element. For instance:
    *   Highlight posts by a specific author with a different background color.
    *   Show a "New!" badge next to posts published within the last 24 hours.

**4. Component Optimization & Higher-Order Components (HOCs):**

*   Implement at least one example of component optimization to improve rendering performance. Consider: (Week 3)
    *   Using `React.memo` or `PureComponent` to prevent unnecessary re-renders.
    *   Using a unique `key` prop for each item when rendering lists.
*   Create a simple HOC (e.g., `withLogger`) that logs a message to the console when a component is mounted and unmounted. Apply this HOC to at least one of your components.

**5. Documentation (README):**

*   In your GitHub repository's README file:
    *   Provide clear instructions on how to install, run, and test the application. Remember to mention that this project uses Vite.
    *   Explain your choices regarding component types (functional vs. class), styling methods, and optimization strategies.
    *   Briefly reflect on any challenges you faced and how you overcame them.
    *   Include a list of any external libraries/packages used.

### GitHub Setup & Requirements:


1. Create a new public GitHub repository for this assessment.
2. Clone the repository to your local machine.
3. Create your React project and complete the assessment inside this repository.
4. Commit and push your work incrementally throughout development.
5. Use clear and meaningful commit messages describing the changes made.
6. Do not upload the entire completed application in one final commit.
7. Do not commit node_modules.
8. Ensure all files required to install and run the application are included.
9. Ensure your latest work is pushed to GitHub before submitting.

Your GitHub development history forms part of the evidence used when reviewing your work.

### Deliverables on Canvas:

1.  A link to your completed GitHub repository.
2.  A short reflection (1-2 paragraphs) on your learning experience during the project. What did you find most valuable? What areas would you like to explore further?

### Assessment Criteria:

*   **Functionality:** Does the application work as intended, fulfilling the core requirements?
*   **Code Quality:** Is the code well-structured, readable, and maintainable? Does it adhere to React and TypeScript best practices?
*   **Component Design:** Are components well-organized, reusable, and appropriately designed (functional vs. class)?
*   **Styling:** Is styling implemented effectively using the chosen methods, and does it enhance the user interface?
*   **Optimization & HOCs:** Are optimization techniques and HOCs implemented correctly to improve performance and code organization?
*   **Documentation:** Is the README file clear, informative, and well-written?
*   **Reflection:** Does the reflection demonstrate thoughtful engagement with the project and the learning materials?

### Tips for Success:

*   Start early and break down the project into smaller, manageable tasks.
*   Refer back to the module materials and examples from the first three weeks.
*   Use the React Developer Tools to debug and inspect your components.
*   Don't hesitate to ask questions in class or on the discussion forums if you get stuck.
*   Focus on understanding the concepts and applying them to the project rather than getting lost in complex features.

This project is designed to be a stepping stone in your React journey. Embrace the challenges, learn from your mistakes, and have fun building your "Mini Blog" application! Good luck!
