import WelcomePage from "./WelcomePage";
import Quiz from "./Quiz";
import QuizCompeleted from "./QuizCompeleted";
import {useState} from "react";

function App() {
  const [quizStarted , setQuizStarted] = useState(false);
  const [quizCompleted , setQuizCompleted] = useState(false);
  const [score , setScore] = useState(0);
  const [correctAnswers , setCorrectAnswers] = useState(0);

  function startQuiz() {
    setQuizStarted(true);
  }
  function quitQuiz() {
    setQuizStarted(false)
  }
  function completeQuiz() {
    setQuizCompleted(true)
  }
  function restartQuiz() {
    setQuizCompleted(false)
    setQuizStarted(false)
  }
  function IncreaseCorrectAnswer() {
    setCorrectAnswers(correctAnswers + 1);
  }
  function increaseScore(newScore) {
    setScore(score + newScore)
  }


  if(quizCompleted){
    return <QuizCompeleted score={score} correctAnswers={correctAnswers} handleTryAgain={restartQuiz}/>
  } else if(quizStarted){
    return <Quiz handleQuit={quitQuiz} handleComplete={completeQuiz} handleCorrectAnswer={IncreaseCorrectAnswer} handleScore={increaseScore}/>
  } else {
    return <WelcomePage handleStart = {startQuiz} />
  }

  
}

export default App;
