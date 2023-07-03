
import '../App.css'

function LandingPage({ startQuiz }) {

    return (
        <div className="landing-page--container">
            <h1>Quizzical</h1>
            <p>Test your general knowledge!</p>
            <button className="btn btn-filled" onClick={ startQuiz }>Start Quiz</button>
        </div>
    )
}

export default LandingPage