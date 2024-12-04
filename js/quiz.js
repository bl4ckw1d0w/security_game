const questions = [
  {
    question: "O que é phishing?",
    options: ["Golpe via e-mail", "Ataque físico", "Roubo de hardware"],
    correct: 0
  },
  {
    question: "Qual a característica de uma senha forte?",
    options: ["Usar apenas números", "Ter pelo menos 8 caracteres, com letras e números", "Ser facilmente lembrada"],
    correct: 1
  }
];

let currentQuestionIndex = 0;
let score = 0;

function showQuestion() {
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");

  const question = questions[currentQuestionIndex];
  questionElement.textContent = question.question;

  optionsElement.innerHTML = '';
  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.onclick = () => checkAnswer(index);
    optionsElement.appendChild(button);
  });
}

function checkAnswer(selectedIndex) {
  const question = questions[currentQuestionIndex];
  if (selectedIndex === question.correct) {
    score++;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  const quizContainer = document.getElementById("quiz-container");
  quizContainer.innerHTML = `<h2>Você terminou o quiz!</h2><p>Sua pontuação: ${score} de ${questions.length}</p>`;
  localStorage.setItem("quizScore", score);
}

document.getElementById("next-btn").addEventListener("click", showQuestion);
showQuestion();
