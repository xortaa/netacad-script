function extractQuestionsAndAnswers() {
  const questions = document.querySelectorAll(".question-container")
  const result = []

  questions.forEach((question, index) => {
    const questionText = question.querySelector(".cyu-question p").innerText
    const answerOptions = question.querySelectorAll(".answer")
    const answers = []

    answerOptions.forEach((answerOption, answerIndex) => {
      const answerText = answerOption.querySelector(".text-asset p").innerText
      const isCorrect = answerOption.querySelector("input").checked

      answers.push({
        text: answerText,
        isCorrect: isCorrect,
      })
    })

    result.push({
      questionNumber: index + 1,
      question: questionText,
      answers: answers,
    })
  })

  return result
}

function logColoredQuestionsAndAnswers(data) {
  data.forEach((item) => {
    console.log(`%cQuestion ${item.questionNumber}`, "color: yellow")
    console.log(`%c${item.question}`, "font-weight: bold;")

    item.answers.forEach((answer) => {
      const color = answer.isCorrect ? "color: green;" : "color: red;"
      console.log(`%c${answer.text}`, color)
    })

    console.log("\n") 
  })
}

const extractedData = extractQuestionsAndAnswers()
logColoredQuestionsAndAnswers(extractedData)
