
function setClassNames(decodedAnswer, selected, showAnswers, correctAnswer) {

    if (showAnswers) {
        if (selected === correctAnswer && 
            correctAnswer === decodedAnswer || 
            correctAnswer === decodedAnswer) {
            return "btn btn-clear btn-correct"
        }

        if(decodedAnswer === selected && selected !== correctAnswer) {
            return "btn btn-clear btn-incorrect"
        }
    }

    return decodedAnswer === selected ?
        "btn btn-clear btn-selected" :
        "btn btn-clear"    
}

export default setClassNames