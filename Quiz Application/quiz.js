const data = [
  {
    id: 1,
    question: "What is Bhaskar's comfort food?",
    answers: [
      { answer: "Butter Chicken", isCorrect: false },
      { answer: "Rajma Rice", isCorrect: false },
      { answer: "Dal Dhokli", isCorrect: true },
      { answer: "Chaach Roti", isCorrect: false },
    ],
  },

  {
    id: 2,
    question: "What is Bhaskar's favorite sweet dish?",
    answers: [
      { answer: "Gulab Jamun", isCorrect: false },
      { answer: "Creamy Kheer", isCorrect: true },
      { answer: "Ras Malai", isCorrect: false },
      { answer: "Ice Cream", isCorrect: false },
    ],
  },

  {
    id: 3,
    question: "Who is Bhaskar's favorite cricketer?",
    answers: [
      { answer: "Rahul Dravid", isCorrect: false },
      { answer: "Sachin Tendulkar", isCorrect: false },
      { answer: "MS Dhoni", isCorrect: false },
      { answer: "Yuvraj Singh", isCorrect: true },
    ],
  },

  {
    id: 4,
    question: "What is Bhaskar's dream vacation place?",
    answers: [
      { answer: "Iceland", isCorrect: true },
      { answer: "Germany", isCorrect: false },
      { answer: "Switzerland", isCorrect: false },
      { answer: "France", isCorrect: false },
    ],
  },

  {
    id: 5,
    question:
      "What kind of view would Bhaskar like to have from his bedroom window?",
    answers: [
      { answer: "Mountains", isCorrect: false },
      { answer: "City building view", isCorrect: false },
      { answer: "River flowing through woods", isCorrect: true },
      { answer: "Countryside Landscape", isCorrect: false },
    ],
  },
];

const gameScreen = document.querySelector(".game");
const resultScreen = document.querySelector(".result");
const question = document.querySelector(".question");
const answersContainer = document.querySelector(".answers");
const submit = document.querySelector(".submit");
const play = document.querySelector(".play");

let qIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let total = 0;
let selectedAnswer;

const playAgain = () => {
  qIndex = 0;
  correctCount = 0;
  wrongCount = 0;
  total = 0;
  showQuestion(qIndex);
};

play.addEventListener("click", () => {
  resultScreen.style.display = "none";
  gameScreen.style.display = "block";
  playAgain();
});

const showResult = () => {
  resultScreen.style.display = "block";
  gameScreen.style.display = "none";

  resultScreen.querySelector(
    ".correct"
  ).textContent = `Correct Answers: ${correctCount}`;

  resultScreen.querySelector(
    ".wrong"
  ).textContent = `Wrong Answers: ${wrongCount}`;

  resultScreen.querySelector(".score").textContent = `Score: ${
    (correctCount - wrongCount) * 10
  }`;
};

const showQuestion = (qNumber) => {
  if (qIndex === data.length) return showResult();
  selectedAnswer = null;
  question.textContent = data[qNumber].question;
  answersContainer.innerHTML = data[qNumber].answers
    .map(
      (item, index) =>
        `
  <div class="answer">
      <input type="radio" id=${index} name="answer" value=${item.isCorrect} />
      <label for="1">${item.answer}</label>
  </div>
  `
    )
    .join("");

  selectAnswer();
};

const selectAnswer = () => {
  answersContainer.querySelectorAll("input").forEach((el) => {
    el.addEventListener("click", (e) => {
      selectedAnswer = e.target.value;
    });
  });
};

const submitAnswer = () => {
  submit.addEventListener("click", () => {
    if (selectedAnswer !== null) {
      selectedAnswer === "true" ? correctCount++ : wrongCount++;
      qIndex++;
      showQuestion(qIndex);
    } else alert("Select an answer!");
  });
};

showQuestion(qIndex);
submitAnswer();
