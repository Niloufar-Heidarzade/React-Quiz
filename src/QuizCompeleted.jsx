import "./QuizCompeleted.css"

function QuizCompeleted({score , correctAnswers , handleTryAgain}) {
  return (
    <div className="completeContainer">
      <h1>Quiz completed!</h1>
      <p className = "correctAnswers">Correct answers: {correctAnswers}</p>
      <p className= "score">Your score: {score}</p>
      <button onClick={handleTryAgain}>Try again</button>
    </div>
  )
}

export default QuizCompeleted;