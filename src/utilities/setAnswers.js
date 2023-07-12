
function setAnswers(incorrectAns, correctAns) {
  const answers = [...incorrectAns]
  const randomIndex = Math.floor(Math.random() * answers.length + 1)
  answers.splice(randomIndex, 0, correctAns)
  return answers
}

export default setAnswers