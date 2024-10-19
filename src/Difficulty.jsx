import "./Difficulty.css"

function Difficulty({beginner , intermediate , professional ,handleBackToTopics}) {
  return (
    <section className = "difficultyContainer">
      <h1>Choose difficulty</h1>
      <section className="levelContainer">
        <div onClick={beginner}>🟢 Beginner</div>
        <div onClick={intermediate}>🟡 Intermediate</div>
        <div onClick={professional}>🔴 Professional</div>
      </section>
      <button onClick={handleBackToTopics}>Back to topics</button>
    </section>
  )
}

export default Difficulty;