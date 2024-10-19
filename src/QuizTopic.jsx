import "./QuizTopic.css"

function QuizTopic({react , vue , angular , svelte}) {
  
  return (
    <section className = "wholeContainer">
      <h1 className = "topicH1">Choose your quiz topic</h1>
      <section className = "topicContainer">
      <div className="topic" onClick = {react}>⚛️React</div>
      <div className="topic" onClick = {vue}>✌️Vue</div>
      <div className="topic" onClick = {angular}>🅰️Angular</div>
      <div className="topic" onClick = {svelte}>🔥Svelte</div>
      </section>
    </section>
  )
}

export default QuizTopic;