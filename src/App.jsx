import WelcomePage from "./WelcomePage";
import Quiz from "./Quiz";
import QuizCompeleted from "./QuizCompeleted";
import {useState} from "react";
import QuizTopic from "./QuizTopic"
import Difficulty from "./Difficulty";

function App() {
  const [quizStarted , setQuizStarted] = useState(false);
  const [quizCompleted , setQuizCompleted] = useState(false);
  const [score , setScore] = useState(0);
  const [correctAnswers , setCorrectAnswers] = useState(0);
  const [topic , setTopic] = useState(null);
  const [level , setLevel] = useState(null);

  function startQuiz() {
    setQuizStarted(true);
  }
  function quitQuiz() {
    setQuizStarted(false)
    setTopic(null)
    setLevel(null)
  }
  function completeQuiz() {
    setQuizCompleted(true)
  }
  function restartQuiz() {
    setQuizCompleted(false)
    setQuizStarted(false)
    setTopic(null)
    setLevel(null)
  }
  function IncreaseCorrectAnswer() {
    setCorrectAnswers(correctAnswers + 1);
  }
  function increaseScore(newScore) {
    setScore(score + newScore);
  }
  function setReactAsTopic() {
    setTopic("react");
  }
  function setVueAsTopic() {
    setTopic("vue");
  }
  function setAngularAsTopic() {
    setTopic("angular");
  }
  function setSvelteAsTopic() {
    setTopic("svelte");
  }
  function setBeginnerLevel() {
    setLevel(1);
  }
  function setIntermediateLevel() {
    setLevel(2);
  }
  function setProfessionalLevel() {
    setLevel(3);
  }
  function backToTopics() {
    setTopic(null);
  }

  if(quizCompleted){
    return <QuizCompeleted score={score} correctAnswers={correctAnswers} handleTryAgain={restartQuiz} />
  } else if(quizStarted){
    if(!topic) {
      return <QuizTopic react={setReactAsTopic} vue={setVueAsTopic} angular={setAngularAsTopic} svelte={setSvelteAsTopic} />
    } else if(!level){
      return <Difficulty beginner={setBeginnerLevel} intermediate={setIntermediateLevel} professional={setProfessionalLevel} handleBackToTopics={backToTopics}/>
    } else {
      return <Quiz handleQuit={quitQuiz} handleComplete={completeQuiz} handleCorrectAnswer={IncreaseCorrectAnswer} handleScore={increaseScore} quizTopic={topic} quizLevel={level}/>
    }
  } else {
    return <WelcomePage handleStart = {startQuiz} />
  }
  
  
}

export default App;
