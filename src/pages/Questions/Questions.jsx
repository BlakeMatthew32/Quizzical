import { useEffect, useState } from "react"
import setAnswers from "../../utilities/setAnswers"
import getQuestionElements from "../../utilities/getQuestionElements"
import he from 'he'

import '../../App.css'

function Questions({ startQuiz }) {

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
    console.log(event.target)
    setQuestions(prev => {
      console.log(name)
      prev.splice(name, 1, {
        ...prev[name],
        selected: value
      })
      console.log(prev)
      return prev
    })
  }

  const questionElements = getQuestionElements(questions, handleClick)

  function submitAnswers(event) {
      event.preventDefault()
      console.log(answers)
  }
  console.log(questions)

  return (
    <div className="questions--container">
      {questionElements}
      <button className="btn btn-filled form--btn">Check Answers</button>
    </div>
  )
}

export default Questions