
import he from 'he'
import { nanoid } from "nanoid"

import setClassNames from './setClassNames'
import '../App.css'

function getQuestionElements(questions, showAnswers, handleClick) {

    return questions.map((element, index) => {
        const {question, answers, correctAnswer, selected} = element
        // console.log(answers)

        const answerElements = answers.map(answer => {
            const decodedAnswer = he.decode(answer)

            const classNames = setClassNames(decodedAnswer, selected, showAnswers, correctAnswer)
            
            return (
                <button 
                    key={nanoid(10)}
                    name={index}
                    value={decodedAnswer} 
                    className={classNames}
                    onClick={event => handleClick(event, decodedAnswer)}>
                        {decodedAnswer}
                </button>
            )
        })

        return (
            <div className="question" key={nanoid(10)}>
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