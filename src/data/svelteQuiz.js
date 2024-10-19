const svelteQuiz = [
  {
    question: "What is Svelte primarily used for?",
    options: [
      { text: "Building user interfaces", isCorrect: true },
      { text: "Managing databases", isCorrect: false },
      { text: "Server-side programming", isCorrect: false },
      { text: "Handling network requests", isCorrect: false }
    ],
    score: 5
  },
  {
    question: "What makes Svelte different from frameworks like React and Vue?",
    options: [
      { text: "It uses a virtual DOM", isCorrect: false },
      { text: "It compiles components into imperative code that manipulates the DOM directly", isCorrect: true },
      { text: "It has no concept of components", isCorrect: false },
      { text: "It is a back-end framework", isCorrect: false }
    ],
    score: 5
  },
  {
    question: "How do you bind a variable to an input element in Svelte?",
    options: [
      { text: "Using v-model", isCorrect: false },
      { text: "Using ngModel", isCorrect: false },
      { text: "Using bind:value", isCorrect: true },
      { text: "Using two-way data binding syntax", isCorrect: false }
    ],
    score: 6
  },
  {
    question: "Which directive is used for conditional rendering in Svelte?",
    options: [
      { text: "if", isCorrect: true },
      { text: "ngIf", isCorrect: false },
      { text: "v-if", isCorrect: false },
      { text: "showIf", isCorrect: false }
    ],
    score: 6
  },
  {
    question: "How do you pass props from a parent to a child component in Svelte?",
    options: [
      { text: "Using @Input", isCorrect: false },
      { text: "Using props", isCorrect: true },
      { text: "Using v-bind", isCorrect: false },
      { text: "Using bind:this", isCorrect: false }
    ],
    score: 7
  },
  {
    question: "What is a reactive statement in Svelte?",
    options: [
      { text: "A lifecycle hook", isCorrect: false },
      { text: "A statement that updates the UI when its dependencies change", isCorrect: true },
      { text: "A special kind of loop", isCorrect: false },
      { text: "A feature for debugging", isCorrect: false }
    ],
    score: 7
  },
  {
    question: "Which lifecycle hook is used to run code after the component is mounted in Svelte?",
    options: [
      { text: "onDestroy", isCorrect: false },
      { text: "onMount", isCorrect: true },
      { text: "afterMount", isCorrect: false },
      { text: "beforeUpdate", isCorrect: false }
    ],
    score: 8
  },
  {
    question: "What does the $: syntax in Svelte represent?",
    options: [
      { text: "A way to declare CSS variables", isCorrect: false },
      { text: "A way to write reactive declarations", isCorrect: true },
      { text: "A shorthand for event handlers", isCorrect: false },
      { text: "A directive for rendering elements", isCorrect: false }
    ],
    score: 8
  },
  {
    question: "How can you loop over an array of items in Svelte?",
    options: [
      { text: "Using v-for", isCorrect: false },
      { text: "Using ngFor", isCorrect: false },
      { text: "Using each", isCorrect: true },
      { text: "Using map", isCorrect: false }
    ],
    score: 9
  },
  {
    question: "What is a store in Svelte?",
    options: [
      { text: "A directive for rendering elements", isCorrect: false },
      { text: "A built-in reactive state management solution", isCorrect: true },
      { text: "A service for HTTP requests", isCorrect: false },
      { text: "A class for managing component lifecycle", isCorrect: false }
    ],
    score: 9
  },
  {
    question: "What is Sapper?",
    options: [
      { text: "A testing library for Svelte", isCorrect: false },
      { text: "A framework for building Svelte applications with server-side rendering", isCorrect: true },
      { text: "A CSS framework for Svelte", isCorrect: false },
      { text: "A Svelte plugin for routing", isCorrect: false }
    ],
    score: 10
  },
  {
    question: "How can you animate elements in Svelte?",
    options: [
      { text: "Using CSS animations only", isCorrect: false },
      { text: "Using Svelte's built-in animate directive", isCorrect: true },
      { text: "Using Angular animations", isCorrect: false },
      { text: "Using external libraries only", isCorrect: false }
    ],
    score: 10
  },
  {
    question: "How do you handle events in Svelte?",
    options: [
      { text: "Using (click) directive", isCorrect: false },
      { text: "Using @event", isCorrect: false },
      { text: "Using on:event", isCorrect: true },
      { text: "Using v-on directive", isCorrect: false }
    ],
    score: 11
  },
  {
    question: "What is SvelteKit?",
    options: [
      { text: "A package manager for Svelte", isCorrect: false },
      { text: "The successor to Sapper for building web applications with Svelte", isCorrect: true },
      { text: "A CLI tool for generating Svelte components", isCorrect: false },
      { text: "A CSS-in-JS library for Svelte", isCorrect: false }
    ],
    score: 12
  },
  {
    question: "How do you declare reactive variables in Svelte?",
    options: [
      { text: "Using the $: syntax before a variable", isCorrect: true },
      { text: "Using 'reactive' keyword", isCorrect: false },
      { text: "Using 'bind' keyword", isCorrect: false },
      { text: "Using 'computed' properties", isCorrect: false }
    ],
    score: 12
  }
];

export default svelteQuiz;
