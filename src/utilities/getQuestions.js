async function getQuestions() {
    const res = await fetch('https://opentdb.com/api.php?amount=5&category=9&type=multiple')
    const data = await res.json()
    return data
}

export default getQuestions