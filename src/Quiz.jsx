import "./Quiz.css";
import reactQuiz from "./data/reactQuiz";
import {useState , useEffect} from "react"

function Quiz({handleQuit , handleComplete , handleCorrectAnswer , handleScore}) {

  const [count , setCount] = useState(1);
  const[isAnswered , setIsAnswered] = useState(false);
  const [timer , setTimer] = useState(600);

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
    if(reactQuiz[count-1].options[optionNumber].isCorrect) {
      e.target.style.backgroundImage = "linear-gradient(to right , #008B8B , #32DE84)";
      handleCorrectAnswer();
      handleScore(reactQuiz[count-1].score);
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
      <h1>⚛️ The React Quiz</h1>
      <div className = "progressBarContainer">
        <div className = "progressBar" style={{width: `${(count / 15) * 100}%`}}></div>
      </div>
      <p className="questionNumber">Question {count}/15</p>
      <h3>{reactQuiz[count-1].question}</h3>
      <ul>
        <li onClick = {(e) => !isAnswered && checkAnswer(e , 0)}>{reactQuiz[count-1].options[0].text}</li>
        <li onClick = {(e) => !isAnswered && checkAnswer(e , 1)}>{reactQuiz[count-1].options[1].text}</li>
        <li onClick = {(e) => !isAnswered && checkAnswer(e , 2)}>{reactQuiz[count-1].options[2].text}</li>
        <li onClick = {(e) => !isAnswered && checkAnswer(e , 3)}>{reactQuiz[count-1].options[3].text}</li>
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