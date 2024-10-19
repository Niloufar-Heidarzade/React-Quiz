const angularQuiz = [
  {
    question: "What is Angular primarily used for?",
    options: [
      { text: "Building user interfaces", isCorrect: true },
      { text: "Managing databases", isCorrect: false },
      { text: "Server-side programming", isCorrect: false },
      { text: "Handling HTTP requests", isCorrect: false }
    ],
    score: 5
  },
  {
    question: "What is an Angular component?",
    options: [
      { text: "A reusable part of the UI with its own logic and data", isCorrect: true },
      { text: "A service for HTTP requests", isCorrect: false },
      { text: "A directive for routing", isCorrect: false },
      { text: "A method for managing forms", isCorrect: false }
    ],
    score: 5
  },
  {
    question: "What is a decorator in Angular?",
    options: [
      { text: "A function that adds metadata to a class or property", isCorrect: true },
      { text: "A template syntax for binding", isCorrect: false },
      { text: "A type of service in Angular", isCorrect: false },
      { text: "A lifecycle hook", isCorrect: false }
    ],
    score: 6
  },
  {
    question: "Which directive is used for conditional rendering in Angular?",
    options: [
      { text: "*ngFor", isCorrect: false },
      { text: "*ngModel", isCorrect: false },
      { text: "*ngClass", isCorrect: false },
      { text: "*ngIf", isCorrect: true }
    ],
    score: 6
  },
  {
    question: "How can you pass data from a parent to a child component in Angular?",
    options: [
      { text: "Using services", isCorrect: false },
      { text: "Using @Input decorator", isCorrect: true },
      { text: "Using @Output decorator", isCorrect: false },
      { text: "Using EventEmitter", isCorrect: false }
    ],
    score: 7
  },
  {
    question: "What is Angular's Dependency Injection (DI)?",
    options: [
      { text: "A way to manage component state", isCorrect: false },
      { text: "A design pattern to inject services into components", isCorrect: true },
      { text: "A service for making HTTP requests", isCorrect: false },
      { text: "A method for rendering templates", isCorrect: false }
    ],
    score: 7
  },
  {
    question: "What is an Angular service?",
    options: [
      { text: "A component used for routing", isCorrect: false },
      { text: "A class used to share data or logic between components", isCorrect: true },
      { text: "A directive for handling forms", isCorrect: false },
      { text: "A lifecycle hook for components", isCorrect: false }
    ],
    score: 8
  },
  {
    question: "Which lifecycle hook is called after the component's view has been initialized?",
    options: [
      { text: "ngOnInit", isCorrect: false },
      { text: "ngAfterViewInit", isCorrect: true },
      { text: "ngAfterContentInit", isCorrect: false },
      { text: "ngOnDestroy", isCorrect: false }
    ],
    score: 8
  },
  {
    question: "What is Angular Router used for?",
    options: [
      { text: "Managing component state", isCorrect: false },
      { text: "Handling routing and navigation in Angular applications", isCorrect: true },
      { text: "Performing HTTP requests", isCorrect: false },
      { text: "Rendering forms", isCorrect: false }
    ],
    score: 9
  },
  {
    question: "What is the purpose of the @Output decorator in Angular?",
    options: [
      { text: "To pass data from parent to child component", isCorrect: false },
      { text: "To emit an event from the child to the parent component", isCorrect: true },
      { text: "To inject dependencies", isCorrect: false },
      { text: "To handle two-way data binding", isCorrect: false }
    ],
    score: 9
  },
  {
    question: "What is an Angular module?",
    options: [
      { text: "A class used to create components", isCorrect: false },
      { text: "A mechanism to group components, services, and other functionalities", isCorrect: true },
      { text: "A directive for routing", isCorrect: false },
      { text: "A function for form handling", isCorrect: false }
    ],
    score: 10
  },
  {
    question: "What is the purpose of HttpClient in Angular?",
    options: [
      { text: "To make HTTP requests to retrieve or send data", isCorrect: true },
      { text: "To create components", isCorrect: false },
      { text: "To manage routing", isCorrect: false },
      { text: "To handle form validation", isCorrect: false }
    ],
    score: 10
  },
  {
    question: "How do you achieve two-way data binding in Angular?",
    options: [
      { text: "Using [(ngModel)]", isCorrect: true },
      { text: "Using [ngIf]", isCorrect: false },
      { text: "Using @Input and @Output", isCorrect: false },
      { text: "Using ngFor", isCorrect: false }
    ],
    score: 11
  },
  {
    question: "What is the Angular CLI?",
    options: [
      { text: "A tool for creating and managing Angular projects", isCorrect: true },
      { text: "A testing library", isCorrect: false },
      { text: "A server-side framework", isCorrect: false },
      { text: "A service for state management", isCorrect: false }
    ],
    score: 12
  },
  {
    question: "What is an Angular 'service'?",
    options: [
      { text: "A method to fetch data from the component", isCorrect: false },
      { text: "A reusable piece of logic that can be injected into components", isCorrect: true },
      { text: "A decorator for components", isCorrect: false },
      { text: "A tool for styling the app", isCorrect: false }
    ],
    score: 12
  }
  
];

export default angularQuiz;
