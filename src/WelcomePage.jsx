import "./WelcomePage.css";

function WelcomePage({handleStart}) {
  return (
    <section className = "welcomeContainer">
      <h1>⚛️ The React Quiz</h1>
      <h3>Welcome to the react quiz!</h3>
      <p>15 questions to test your React mastery</p>
      <button onClick = {handleStart}>Let's get started</button>
    </section>
  )
}

export default WelcomePage;