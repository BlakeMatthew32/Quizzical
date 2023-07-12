
import he from 'he'

import '../App.css'

function getQuestionElements(questions, handleClick) {

    return questions.map((element, index) => {
        const {question, answers, correctAnwer, selected} = element
        // console.log(answers)

        const answerElements = answers.map(answer => {
            const decodedAnswer = he.decode(answer)
            console.log(answer === selected)
            console.log('here')
            return (
                <button 
                    name={index}
                    value={decodedAnswer} 
                    className={answer === selected ?
                        "btn btn-clear btn-selected" :
                        "btn btn-clear" 
                    }
                    onClick={event => handleClick(event, decodedAnswer)}>
                        {decodedAnswer}
                </button>
            )
        })

        return (
            <div className="question">
                <h2>{question}</h2>
                <div className="answers">
                    {...answerElements}
                </div>
                <hr />
            </div>
        )
    })
}

export default getQuestionElements