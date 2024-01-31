const quizForm = document.querySelector('.quiz-form')
const correctAnswer = ['4', '4', '0', '6', '90']
const resultBox = document.querySelector('.result')

let score = 0

const quetionsAnswer = [
	{
		id: 'q1',
		question: 'What is 2 + 2 ?',
		optionA: '3',
		optionB: '4',
		optionC: '8',
		optionD: '0',
		answer: '4'
	},
	{
		id: 'q2',
		question: 'What is 2 ** 2 ?',
		optionA: '3',
		optionB: '4',
		optionC: '8',
		optionD: '0',
		answer: '4'
	},
	{
		id: 'q3',
		question: 'What is 2 - 2 ?',
		optionA: '3',
		optionB: '4',
		optionC: '8',
		optionD: '0',
		answer: '0'
	},
	{
		id: 'q4',
		question: 'What is (2 *4) - 2 ?',
		optionA: '3',
		optionB: '6',
		optionC: '8',
		optionD: '0',
		answer: '6'
	},
	{
		id: 'q5',
		question: 'What is 99 - 9 ?',
		optionA: '93',
		optionB: '94',
		optionC: '98',
		optionD: '90',
		answer: '90'
	}
]

function restart() {
	score = 0
	document.location.reload()
}

window.onload = function () {
	const buttonSubmit = `<button type="submit" class="btn-primary m-top">
        Submit
    </button>`
	quetionsAnswer.forEach((question) => {
		const questionHtml = `<div class="question">
							<h3 class="question-title poppins-semibold">
								<span class="question-number"> 01 : - </span
								>${question.question}
							</h3>
							<div class="options">
								<div class="option-box">
									<label for="${question.id}">${question.optionA}</label>
									<input
										type="radio"
										name="${question.id}"
										id="${question.id}a"
										value="${question.optionA}"
									/>
								</div>
								<div class="option-box">
									<label for="${question.id}">${question.optionB}</label>
									<input
										type="radio"
										name="${question.id}"
										id="${question.id}b"
										value="${question.optionB}"
									/>
								</div>
							</div>
							<div class="options">
								<div class="option-box">
									<label for="${question.id}">${question.optionC}</label>
									<input
										type="radio"
										name="${question.id}"
										id="${question.id}c"
										value="${question.optionC}"
									/>
								</div>
								<div class="option-box">
									<label for="${question.id}">${question.optionD}</label>
									<input
										type="radio"
										name="${question.id}"
										id="${question.id}d"
										value="${question.optionD}"
									/>
								</div>
							</div>
						</div>`
		quizForm.innerHTML += questionHtml
	})
	quizForm.innerHTML += buttonSubmit
	const questions = document.querySelectorAll('.question')

	quizForm.addEventListener('submit', (event) => {
		event.preventDefault()

		const userAnswer = [
			event.target.q1.value,
			event.target.q2.value,
			event.target.q3.value,
			event.target.q4.value,
			event.target.q5.value
		]
		userAnswer.forEach((answer, Index) => {
			if (answer === quetionsAnswer[Index].answer) {
				score += 1
				questions[Index].classList.add('correct')
			} else {
				questions[Index].classList.add('wrong')
			}
		})

		scrollTo(0, 0)
		resultBox.classList.remove('hide')
		const scoreShow = resultBox.querySelector('p')
        if (score == 5){
            scoreShow.innerText = `You scored ${score}/5 😎`
        }
        else {
            scoreShow.innerText = `You scored ${score}/5`
        }
	})
}
