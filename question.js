// Sample questions array
let questions = [
  {
      numb: 1,
      question: "The most important Aluminium ore is?",
      answer: " [B] Bauxite",
      options: ["[A] Limestone", "[B] Bauxite", "[C] Granite", "[D] Lead"],
  },
  {
      numb: 2,
      question: "Which among the following is known as Quick Lime?",
      answer: "[A] CaO",
      options: ["[A] CaO", "[B] CaCO2", "[C] Ca(OH)2", "[D] CaCl2"],
  },
  {
      numb: 3,
      question: "Which among the following is a common salt in Detergents?",
      answer: "[A] Sulphate",
      options: ["[A] Sulphate", "[B] Nitrate", "[C] Sulphonate", "[D] Carbonate"],
  },
  {
      numb: 4,
      question: "Which of the following is not a common use of Graphite?",
      answer: "[D] In glass cutting",
      options: [
          "[A] Manufacturing of electrodes",
          "[B] As a lubricant",
          "[C] Manufacturing of crucibles",
          "[D] In glass cutting",
      ],
  },
  {
      numb: 5,
      question: "Bromine has isotopes",
      answer: "[A] 2",
      options: ["[A] 2", "[B] 4 ", "[C] 8", "[D] 6"],
  },
  {
      numb: 6,
      question: "	Which of the following is NOT correct about Xenon Hexafluoride??",
      answer: " [B] At room temperature, it is a colourless liquid",
      options: ["[A] It is a noble gas compound", "[B] At room temperature, it is a colourless liquid", "[C] Both a and b", "[D] None"],
  },
  {
      numb: 7,
      question: "	Which of the following elements have ns1 outermost electronic configuration?",
      answer: " [A] s-block elements",
      options: ["[A] s-block elements", "[B] p-block elements", "[C] d-block elements", "[D] f-block elements"],
  },
  {
      numb: 8,
      question: "What percentage of Human body is made up of carbon?",
      answer: " [B] 18.5",
      options: ["[A] 12", "[B] 18.5", "[C] 28.8", "[D] 44.2"],
  },
  {
      numb: 9,
      question: "The most important Aluminium ore is?",
      answer: " [B] Bauxite",
      options: ["[A] Limestone", "[B] Bauxite", "[C] Granite", "[D] Lead"],
  },
  {
      numb: 10,
      question: "What is the common name of But-2-yne?",
      answer: " [D] Dimethylacetylene",
      options: ["[A] Acetylene", "[B] Methylacetylene", "[C] Ethylacetylene", "[D] Dimethylacetylene"],
  },

];
let questionCount = 0; // Track the current question index
let score = 0; // Track the user's score

// Select necessary elements
const startBtn = document.querySelector(".start-btn");
const popupInfo = document.querySelector(".popup-info");
const exitBtn = document.querySelector(".exit-btn");
const continueBtn = document.querySelector(".continue-btn");
const main = document.querySelector(".main");
const quizSection = document.querySelector(".quiz-section");
const quizBox = document.querySelector(".quiz-box");
const questionText = document.querySelector(".question-text");
const optionList = document.querySelector(".option-list");
const questionTotal = document.querySelector(".question-total");
const nextBtn = document.querySelector(".next-btn");
const scoreDisplay = document.querySelector(".header-score");

// Show the initial popup and guide
startBtn.onclick = () => {
  popupInfo.classList.add("active");
  main.classList.add("active");
};

// Exit the quiz popup
exitBtn.onclick = () => {
  popupInfo.classList.remove("active");
  main.classList.remove("active");
};

// Continue to the quiz
continueBtn.onclick = () => {
  quizSection.classList.add("active");
  popupInfo.classList.remove("active");
  main.classList.remove("active");
  quizBox.classList.add("active");
  showQuestions(0); // Load the first question
};

// Function to load a question
function showQuestions(index) {
  // Display question text
  questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;

  // Clear previous options
  optionList.innerHTML = "";

  // Display options dynamically
  questions[index].options.forEach((option) => {
      let optionTag = `<div class="option"><span>${option}</span></div>`;
      optionList.innerHTML += optionTag;
  });

  // Add click event listener to each option
  const optionElements = document.querySelectorAll(".option");
  optionElements.forEach((option, idx) => {
      option.onclick = () => optionSelected(option, idx);
  });

  // Update the question total (e.g., 1 of 5 Questions)
  questionTotal.textContent = `${questions[index].numb} of ${questions.length} Questions`;
}

// Function to handle option selection
function optionSelected(selectedOption, optionIndex) {
  const currentQuestion = questions[questionCount];
  const correctAnswer = currentQuestion.answer.trim(); // Get the correct answer

  // Check if the selected option is correct
  const selectedAnswer = selectedOption.textContent.trim();
  if (selectedAnswer === correctAnswer) {
      score++; // Increment score if the answer is correct
      selectedOption.classList.add("correct"); // Highlight correct option
  } else {
      selectedOption.classList.add("incorrect"); // Highlight incorrect option

      // Highlight the correct answer for better user feedback
      optionList.querySelectorAll(".option").forEach((opt) => {
          if (opt.textContent.trim() === correctAnswer) {
              opt.classList.add("correct");
          }
      });
  }

  // Disable all options once one is selected
  optionList.querySelectorAll(".option").forEach((opt) => {
      opt.classList.add("disabled");
  });

  // Update the score display
  scoreDisplay.textContent = `Score: ${score} / 10`;
}

// Handle the "Next" button click
nextBtn.onclick = () => {
  questionCount++;

  if (questionCount < questions.length) {
      showQuestions(questionCount);
  } else {
      alert(`Quiz finished! Your score is ${score} / ${questions.length}`);
      location.reload();
  }
};

// Initial load of the first question
showQuestions(questionCount);
