import "./Quiz.css";

function Quiz() {
  return (
    <section className = "quizContainer">
      <h3>⚛️ The React Quiz</h3>
      <div className = "progressBarContainer">
        <div className = "progressBar"></div>
      </div>
      <p>Question {}/15</p>
      <h4>What does JSX stand for in React?</h4>
    </section>
  )
}

export default Quiz;