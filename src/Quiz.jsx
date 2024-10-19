import "./Quiz.css";
import reactQuiz from "./data/reactQuiz";
import vueQuiz from "./data/vueQuiz";
import angularQuiz from "./data/angularQuiz";
import svelteQuiz from "./data/svelteQuiz";
import {useState , useEffect} from "react";

function Quiz({handleQuit , handleComplete , handleCorrectAnswer , handleScore , quizTopic , quizLevel}) {
  const questionsData = quizTopic==="react"?reactQuiz:quizTopic==="vue"?vueQuiz:quizTopic==="angular"?angularQuiz:quizTopic==="svelte"?svelteQuiz:null;
  const [count , setCount] = useState(1);
  const[isAnswered , setIsAnswered] = useState(false);
  const [timer , setTimer] = useState(quizLevel===1?600:quizLevel===2?420:quizLevel===3?300:600);

  useEffect(() => {
    const interval = setInterval(() => {
      if(timer < 1){
        handleQuit();
        clearInterval(interval)
      } else {
        setTimer((oldTimer) => {
          return oldTimer-1;
        });
      }
    },1000)
    return () => clearInterval(interval)
  },[])

  function formatTime(seconds) {
    const minute = Math.floor(seconds/60);
    const second = seconds%60;
    if(second < 10) {
      return `0${minute}:0${second}`
    }else {
      return `0${minute}:${second}`
    }
  }

  function checkAnswer (e , optionNumber) {
    setIsAnswered(true);
    if(questionsData[count-1].options[optionNumber].isCorrect) {
      e.target.style.backgroundImage = "linear-gradient(to right , #008B8B , #32DE84)";
      handleCorrectAnswer();
      handleScore(questionsData[count-1].score);
    } else {
      e.target.style.backgroundImage = "linear-gradient(to right , #FF033E , #FD5C63)";
    }
  }

  function nextQuestion() {
    if(count < 15) {
      setCount(count+1)
      setIsAnswered(false)
      const listItems = document.getElementsByTagName("li");
      for (let i = 0; i < listItems.length; i++) {
        listItems[i].style.backgroundImage = "none";
      }
    }
    if(count === 15) {
      handleComplete()
    }
  }

  return (
    <section className = "quizContainer">
      <h1>{quizTopic==="react"?"⚛️The React Quiz":quizTopic==="vue"?"✌️The Vue Quiz":quizTopic==="angular"?"🅰️The Angular Quiz":quizTopic==="svelte"?"🔥The Svelte Quiz":"The Quiz"}</h1>
      <div className = "progressBarContainer">
        <div className = "progressBar" style={{width: `${(count / 15) * 100}%`}}></div>
      </div>
      <p className="questionNumber">Question {count}/15</p>
      <h3>{questionsData[count-1].question}</h3>
      <ul className="listOfOptions">
        <li onClick = {(e) => !isAnswered && checkAnswer(e , 0)}>{questionsData[count-1].options[0].text}</li>
        <li onClick = {(e) => !isAnswered && checkAnswer(e , 1)}>{questionsData[count-1].options[1].text}</li>
        <li onClick = {(e) => !isAnswered && checkAnswer(e , 2)}>{questionsData[count-1].options[2].text}</li>
        <li onClick = {(e) => !isAnswered && checkAnswer(e , 3)}>{questionsData[count-1].options[3].text}</li>
      </ul>
      <div className = "timerAndButtonDiv">
        <p className="timer">Time left: {formatTime(timer)}</p>
        <button className="quitBtn" onClick={!isAnswered ? () => handleQuit() : () => nextQuestion()}>
        {count === 15 ? "Submit" : isAnswered ? "Next question" : "Quit the quiz"}
        </button>
      </div>
    </section>
  )
}

export default Quiz;