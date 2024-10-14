const reactQuiz = [
  {
    question: "What is React primarily used for?",
    options: [
      { text: "Building user interfaces", isCorrect: true },
      { text: "Database management", isCorrect: false },
      { text: "Server-side programming", isCorrect: false },
      { text: "Handling network requests", isCorrect: false }
    ],
    score: 5
  },
  {
    question: "What is a React component?",
    options: [
      { text: "A variable that holds the state", isCorrect: false },
      { text: "A library for routing", isCorrect: false },
      { text: "A function or class that returns JSX", isCorrect: true },
      { text: "A method for fetching APIs", isCorrect: false }
    ],
    score: 5
  },
  {
    question: "What does JSX stand for?",
    options: [
      { text: "JavaScript XML", isCorrect: true },
      { text: "JavaScript Xperience", isCorrect: false },
      { text: "Java Syntax Extension", isCorrect: false },
      { text: "JavaScript eXtension", isCorrect: false }
    ],
    score: 6
  },
  {
    question: "Which hook is used to manage state in functional components?",
    options: [
      { text: "useEffect", isCorrect: false },
      { text: "useReducer", isCorrect: false },
      { text: "useContext", isCorrect: false },
      { text: "useState", isCorrect: true },
    ],
    score: 6
  },
  {
    question: "How can you pass data from a parent to a child component?",
    options: [
      { text: "Using state", isCorrect: false },
      { text: "Using props", isCorrect: true },
      { text: "Using context", isCorrect: false },
      { text: "Using events", isCorrect: false }
    ],
    score: 7
  },
  {
    question: "What is the purpose of the useEffect hook?",
    options: [
      { text: "Initialize state", isCorrect: false },
      { text: "Perform side effects in a functional component", isCorrect: true },
      { text: "Pass props", isCorrect: false },
      { text: "Render a component", isCorrect: false }
    ],
    score: 7
  },
  {
    question: "What is the virtual DOM in React?",
    options: [
      { text: "A storage for the component’s state", isCorrect: false },
      { text: "A feature to create components", isCorrect: false },
      { text: "A debugging tool", isCorrect: false },
      { text: "A lightweight copy of the actual DOM", isCorrect: true }
    ],
    score: 8
  },
  {
    question: "How do you conditionally render a component in React?",
    options: [
      { text: "Using ternary operators or logical &&", isCorrect: true },
      { text: "Using if/else statements in JSX", isCorrect: false },
      { text: "Using loops", isCorrect: false },
      { text: "React does not support conditional rendering", isCorrect: false }
    ],
    score: 8
  },
  {
    question: "What method is used to update the state in a class component?",
    options: [
      { text: "setState", isCorrect: true },
      { text: "updateState", isCorrect: false },
      { text: "modifyState", isCorrect: false },
      { text: "changeState", isCorrect: false }
    ],
    score: 9
  },
  {
    question: "What is a key prop in React lists used for?",
    options: [
      { text: "To pass data to the child component", isCorrect: false },
      { text: "To handle events", isCorrect: false },
      { text: "To uniquely identify list items", isCorrect: true },
      { text: "To change the state", isCorrect: false }
    ],
    score: 9
  },
  {
    question: "Which lifecycle method is called once, after the initial rendering?",
    options: [
      { text: "componentDidUpdate", isCorrect: false },
      { text: "componentWillUnmount", isCorrect: false },
      { text: "componentWillUpdate", isCorrect: false },
      { text: "componentDidMount", isCorrect: true }
    ],
    score: 10
  },
  {
    question: "What does the useContext hook do?",
    options: [
      { text: "Allows accessing context values", isCorrect: true },
      { text: "Triggers side effects", isCorrect: false },
      { text: "Updates state", isCorrect: false },
      { text: "Fetches data from an API", isCorrect: false }
    ],
    score: 10
  },
  {
    question: "What is React.memo used for?",
    options: [
      { text: "To store the state", isCorrect: false },
      { text: "To render a component", isCorrect: false },
      { text: "To optimize functional components by memoizing them", isCorrect: true },
      { text: "To fetch data", isCorrect: false }
    ],
    score: 11
  },
  {
    question: "What happens when you call setState in React?",
    options: [
      { text: "The state is updated immediately without re-rendering", isCorrect: false },
      { text: "It triggers the useEffect hook", isCorrect: false },
      { text: "It removes the component", isCorrect: false },
      { text: "The component re-renders with the updated state", isCorrect: true },
    ], 
    score: 11
  },
  {
    question: "What is React Router used for?",
    options: [
      { text: "Managing component state", isCorrect: false },
      { text: "Handling routing and navigation in React applications", isCorrect: true },
      { text: "Rendering components conditionally", isCorrect: false },
      { text: "Handling form submissions", isCorrect: false }
    ],
    score: 12
  }
];

export default reactQuiz;
