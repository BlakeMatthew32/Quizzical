import { useState } from 'react'
import LandingPage from './pages/LandingPage'
import Questions from './pages/Questions/Questions'

import './App.css'

function App() {
  const [startQuiz, setStartQuiz] = useState(false)

  function handleStartQuiz() {
    console.log('started')
    setStartQuiz(true)
  }

  return (
    <>
      {startQuiz ? 
        <Questions /> : 
        <LandingPage startQuiz={handleStartQuiz}/>
      }
      
    </>
  )
}

export default App
