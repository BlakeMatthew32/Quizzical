import { useEffect, useState } from "react"
// import './src/App.css'

function Questions({ questions }) {

    const [usersAnswers, setUsersAnswers] = useState({
        question0: '',
        question1: '',
        question2: '',
        question3: '',
        question4: ''
    })

    
    console.log(usersAnswers)

    function handleChange(event, index) {
        const {name, value, type, checked} = event.target

        setUsersAnswers(prevUserAnswers => {
            return {
                ...prevUserAnswers,
                [name]: value
            }
        })
    }

    const questionElms = questions.map((questionElm, index) => {
        const { question, incorrect_answers, correct_answer } = questionElm
        const answers = [...incorrect_answers]
        const randomIndex = Math.floor(Math.random() * answers.length + 1)
        answers.splice(randomIndex, 0, correct_answer)
    
        const answerArray = []
    
        for(let answer of answers){
          answerArray.push(
            <>
              <input type='radio' id={answer} value={answer} name={`question${index}`} onChange={(event) => {handleChange(event)}}/>
              <label className='btn btn-clear' htmlFor={answer}>{answer}</label>
            </>
          )
        }
    
        return (
          <div className='question'>
            <h2>{question}</h2>
            <div className='answers--container'>
              {...answerArray}
            </div>
            <hr />
          </div>
        )
      })

    function submitAnswers(event) {
        event.preventDefault()
        console.log(answers)
    }

    return (
        <form className="questions--container" onSubmit={submitAnswers}>
            {...questionElms}
            <button className="btn btn-filled form--btn">Check Answers</button>
        </form>
    )
}

export default Questions