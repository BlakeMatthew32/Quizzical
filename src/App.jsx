import { useEffect, useState } from 'react'
import LandingPage from './pages/LandingPage'
import Questions from './pages/Questions/Questions'

import './App.css'

function App() {
  const [startQuiz, setStartQuiz] = useState(true)

  function handleStartQuiz() {
    setStartQuiz(true)
  }

  return (
    <>
      {startQuiz ? 
        <Questions startQuiz={startQuiz} />
         : 
        <LandingPage startQuiz={handleStartQuiz}/>
      }
      
    </>
  )
}

export default App
