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
    fetch('https://opentdb.com/api.php?amount=5&category=18&type=multiple')
      .then(res => res.json())
      .then(data => setQuestions(data.results))
  }, [startQuiz])

  

  function handleStartQuiz() {
    console.log('started')
    setStartQuiz(true)
  }

  return (
    <>
      {startQuiz ? 
        <Questions questions={questions} />
         : 
        <LandingPage startQuiz={handleStartQuiz}/>
      }
      
    </>
  )
}

export default App
