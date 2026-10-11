<!-- Dev Stack Builder -->


<!-- Project Description

Dev Stack Builder is a responsive web application that helps developers explore different technologies and build their ideal development stack. Users can browse technology cards, check their categories and ratings, and add or remove technologies from their personalized stack. -->



<!-- Technologies Used

React

TypeScript

Tailwind CSS

React Toastify

JSON

Vite

React Icons -->








<!-- Key Features

Explore Technologies: Browse technology cards with icons, descriptions, categories, difficulty levels, and ratings.

Build Your Own Stack: Add technologies to your personalized stack, remove individual items, or clear the entire stack. Duplicate selections are prevented.

Responsive Design and Notifications: Enjoy a responsive interface across different screen sizes, with loading indicators and toast notifications for important actions. -->
















<!-- ## React Questions and Answers

### 1. What is JSX, and why is it used in React?

JSX stands for JavaScript XML. It allows us to write HTML-like code inside JavaScript to describe the user interface in React.

### 2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. State is used to store and manage data that can change over time.

### 3. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook allows us to store and update data in a component. In this project, I used it to manage the technology list, selected technologies, and loading state.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

The `useEffect` hook runs side effects in a component. I used it to fetch technology data from `data.json` when the Technology component loads.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify which items have changed, been added, or been removed. It helps React update the list efficiently.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means displaying different UI elements based on a condition. In this project, I used it to show a loading message while data loads and technology cards afterward. The Your Stack component also shows an empty-stack message when no technologies are selected.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child using props. A child can communicate back by calling a callback function passed to it through props. In this project, Technology passes technology data and handler functions to TechnologyCard and YourStack. -->






# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://npmx.dev/package/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://npmx.dev/package/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```
