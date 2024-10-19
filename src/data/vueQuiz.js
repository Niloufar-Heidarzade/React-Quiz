const vueQuiz = [
  {
    question: "What is Vue.js primarily used for?",
    options: [
      { text: "Building user interfaces", isCorrect: true },
      { text: "Server-side programming", isCorrect: false },
      { text: "Database management", isCorrect: false },
      { text: "Handling API requests", isCorrect: false }
    ],
    score: 5
  },
  {
    question: "What is a Vue component?",
    options: [
      { text: "A function for managing routes", isCorrect: false },
      { text: "A method for fetching APIs", isCorrect: false },
      { text: "A reusable instance with its own state and logic", isCorrect: true },
      { text: "A service for database access", isCorrect: false }
    ],
    score: 5
  },
  {
    question: "What is the template syntax used in Vue?",
    options: [
      { text: "Handlebars", isCorrect: false },
      { text: "JSX", isCorrect: false },
      { text: "HTML-based template syntax with directives", isCorrect: true },
      { text: "EJS", isCorrect: false }
    ],
    score: 6
  },
  {
    question: "Which directive is used for conditional rendering in Vue?",
    options: [
      { text: "v-show", isCorrect: false },
      { text: "v-for", isCorrect: false },
      { text: "v-else", isCorrect: false },
      { text: "v-if", isCorrect: true },
    ],
    score: 6
  },
  {
    question: "How can you pass data from a parent to a child component in Vue?",
    options: [
      { text: "Using methods", isCorrect: false },
      { text: "Using events", isCorrect: false },
      { text: "Using props", isCorrect: true },
      { text: "Using watchers", isCorrect: false }
    ],
    score: 7
  },
  {
    question: "What is Vuex used for?",
    options: [
      { text: "To manage state across components", isCorrect: true },
      { text: "To handle routing", isCorrect: false },
      { text: "To perform HTTP requests", isCorrect: false },
      { text: "To render the DOM", isCorrect: false }
    ],
    score: 7
  },
  {
    question: "What is a computed property in Vue?",
    options: [
      { text: "A property that directly modifies the state", isCorrect: false },
      { text: "A method that fetches data", isCorrect: false },
      { text: "A cached property that updates when dependencies change", isCorrect: true },
      { text: "A property used for rendering templates", isCorrect: false }
    ],
    score: 8
  },
  {
    question: "How do you create a two-way binding in Vue?",
    options: [
      { text: "Using v-if", isCorrect: false },
      { text: "Using v-for", isCorrect: false },
      { text: "Using v-bind", isCorrect: false },
      { text: "Using v-model", isCorrect: true },
    ],
    score: 8
  },
  {
    question: "Which lifecycle hook is called after the component is mounted?",
    options: [
      { text: "beforeMount", isCorrect: false },
      { text: "mounted", isCorrect: true },
      { text: "beforeDestroy", isCorrect: false },
      { text: "destroyed", isCorrect: false }
    ],
    score: 9
  },
  {
    question: "What is a key prop in Vue used for?",
    options: [
      { text: "To manage form inputs", isCorrect: false },
      { text: "To uniquely identify DOM elements", isCorrect: true },
      { text: "To bind events", isCorrect: false },
      { text: "To update the component", isCorrect: false }
    ],
    score: 9
  },
  {
    question: "What does the Vue Router do?",
    options: [
      { text: "Manages component state", isCorrect: false },
      { text: "Handles routing and navigation between views", isCorrect: true },
      { text: "Fetches data from APIs", isCorrect: false },
      { text: "Handles form submissions", isCorrect: false }
    ],
    score: 10
  },
  {
    question: "What is a watcher in Vue?",
    options: [
      { text: "A method to fetch API data", isCorrect: false },
      { text: "A way to trigger a function when a specific data property changes", isCorrect: true },
      { text: "A way to handle DOM events", isCorrect: false },
      { text: "A directive for rendering elements", isCorrect: false }
    ],
    score: 10
  },
  {
    question: "What happens when you call this.$set in Vue?",
    options: [
      { text: "It triggers an HTTP request", isCorrect: false },
      { text: "It removes the component", isCorrect: false },
      { text: "It re-renders the component without updating state", isCorrect: false },
      { text: "It updates a reactive property and triggers a re-render", isCorrect: true }
    ],
    score: 11
  },
  {
    question: "What is Nuxt.js?",
    options: [
      { text: "A state management library", isCorrect: false },
      { text: "A framework for building Vue.js applications with server-side rendering", isCorrect: true },
      { text: "A Vue CLI plugin", isCorrect: false },
      { text: "A testing library", isCorrect: false }
    ],
    score: 12
  },
  {
    question: "What is the purpose of Vue's 'v-bind' directive?",
    options: [
      { text: "To conditionally render elements", isCorrect: false },
      { text: "To bind HTML attributes or Vue instance data to the DOM", isCorrect: true },
      { text: "To handle events", isCorrect: false },
      { text: "To loop through an array", isCorrect: false }
    ],
    score: 12
  }
];

export default vueQuiz;
