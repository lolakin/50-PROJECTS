const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
    {
        question: "In the first episode of squid game, what is Gi-Hun betting on?",
        choice1: "College football",
        choice2: "Horse racing",
        choice3: "Basketball",
        choice4: "Poker",
        answer: 2,
    },
    {
        question: "What is Gi-Hun's profession in squid game?",
        choice1: "Accountant",
        choice2: "Waiter",
        choice3: "Chauffeur",
        choice4: "Janitor",
        answer: 3,
    },
    {
        question: "How many people were contestants in the game?",
        choice1: "656",
        choice2: "566",
        choice3: "486",
        choice4: "456",
        answer: 4,
    },
    {
        question: "What are the shapes on the card given to the contestants?",
        choice1: "Circle, Rectangle, Square",
        choice2: "Circle, Triangle, Square",
        choice3: "Triangle, Square, Star",
        choice4: "Rectangle, Circle, Pentagon",
        answer: 2,
    },
    {
        question: "What is the first game called?",
        choice1: "Red Light, Green Light",
        choice2: "Stop and Go",
        choice3: "Freeze",
        choice4: "Search and Destroy",
        answer: 1,
    },

    {
        question: "What contestant number is Gi-Hun?",
        choice1: "456",
        choice2: "001",
        choice3: "067",
        choice4: "218",
        answer: 1,
    },

    {
        question: "The police officer found out his brother competed in the game in what year?",
        choice1: "2009",
        choice2: "2013",
        choice3: "2015",
        choice4: "2018",
        answer: 3,
    },


    {
        question: "What did Gi-Hun give to his daughter as a birthday gift accidentally?",
        choice1: "A gun",
        choice2: "A lighter",
        choice3: "A doll",
        choice4: "A stolen necklace",
        answer: 2,
    },

    {
        question: "Which shape on the guard's mask represented the highest rank?",
        choice1: "Circle",
        choice2: "Square",
        choice3: "Triangle",
        choice4: "Star",
        answer: 2,
    },

    {
        question: "What shape does Ali get in the second game?",
        choice1: "Umbrella",
        choice2: "Star",
        choice3: "Circle",
        choice4: "Triangle",
        answer: 3,
    }
];

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 11;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuesions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);
    //go to the end page
    return window.location.assign("/end.html");
  }
  questionCounter++;
  progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
  //Update the progress bar
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuesions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(CORRECT_BONUS);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

incrementScore = num => {
  score += num;
  scoreText.innerText = score;
};

startGame();