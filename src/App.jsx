import { useEffect, useState } from 'react'
import LandingPage from './pages/LandingPage'
import Questions from './pages/Questions/Questions'
import getQuestions from './utilities/getQuestions'

import './App.css'

function App() {
  const [startQuiz, setStartQuiz] = useState(true)
  const [questions, setQuestions] = useState([])

  

  useEffect(() => {
    // getQuestions()
    fetch('https://opentdb.com/api.php?amount=5&category=9&type=multiple')
      .then(res => res.json())
      .then(data => setQuestions(data.results))
  }, [startQuiz])

  const questionsElements = questions.map(questionElm => {
    const { question, incorrect_answers, correct_answer } = questionElm
    const answers = [...incorrect_answers]
    const randomIndex = Math.floor(Math.random() * answers.length + 1)
    answers.splice(randomIndex, 0, correct_answer)

    
    console.log(answers)

    return (
      <div className='question'>
        <h2>{question}</h2>
        <div className='answers--container'>
          <button className='btn btn-clear'>{answers[0]}</button>
          <button className='btn btn-clear'>{answers[1]}</button>
          <button className='btn btn-clear'>{answers[2]}</button>
          <button className='btn btn-clear'>{answers[3]}</button>
        </div>
        <hr />
      </div>
    )
  })

  function handleStartQuiz() {
    console.log('started')
    setStartQuiz(true)
  }

  return (
    <>
      {startQuiz ? 
        <Questions questionElements={questionsElements} /> : 
        <LandingPage startQuiz={handleStartQuiz}/>
      }
      
    </>
  )
}

export default App
