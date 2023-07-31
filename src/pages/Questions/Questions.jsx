import { useEffect, useState } from "react"
import setAnswers from "../../utilities/setAnswers"
import getQuestionElements from "../../utilities/getQuestionElements"
import he from 'he'

import '../../App.css'

function Questions({ startQuiz }) {

  let questionElements

  const [showAnswers, setShowAnswers] = useState(false)

  const [numCorrect, setNumCorrect] = useState(0)

  const [questions, setQuestions] = useState([
      {
        question: '',
        answers: [],
        correctAnswer: '',
        selected: ''
      },
      {
        question: '',
        answers: [],
        correctAnswer: '',
        selected: ''
      },
      {
        question: '',
        answers: [],
        correctAnswer: '',
        selected: ''
      },
      {
        question: '',
        answers: [],
        correctAnswer: '',
        selected: ''
      },
      {
        question: '',
        answers: [],
        correctAnswer: '',
        selected: ''
      },
    ])

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5&category=18&type=multiple')
      .then(res => res.json())
      .then(data => {
        const { results } = data
        setQuestions(prev => {
          return prev.map((elm, index) => {
            return {
              question: he.decode(results[index].question),
              answers: setAnswers(
                results[index].incorrect_answers, 
                results[index].correct_answer
              ),
              correctAnswer: he.decode(results[index].correct_answer),
              selected: ''
            }
          })
        })
      })
  }, [startQuiz])

  function handleClick(event, decodedAnswer) {
    const {name, value} = event.target
    setQuestions(prev => {
      const newQuestions = [...prev]
      newQuestions.splice(name, 1, {
        ...newQuestions[name],
        selected: value
      })
      return newQuestions
    })
  }

  questionElements = getQuestionElements(questions, showAnswers, handleClick)

  function toggleAnswers(event) {
      event.preventDefault()
      setNumCorrect(questions.filter(question => question.correctAnswer === question.selected).length)
      console.log(numCorrect)
      setShowAnswers(true)
  }

  return (
    <div className="questions--container">
      {questionElements}
      <button className="btn btn-filled form--btn" onClick={toggleAnswers}>Check Answers</button>
      {showAnswers && 
        <p>
          You Got {numCorrect} out of 5 Right!
        </p>
      }
    </div>
  )
}

export default Questions