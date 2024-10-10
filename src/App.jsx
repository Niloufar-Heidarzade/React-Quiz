import WelcomePage from "./WelcomePage";
import Quiz from "./Quiz";
import {useState} from "react";

function App() {
  const [quizStarted , setQuizStarted] = useState(false);
  function startQuiz() {
    setQuizStarted(true);
  }
  return (
    <>
    {quizStarted ? <Quiz /> : <WelcomePage handleStart = {startQuiz} />}
    </>
  )
}

export default App;
