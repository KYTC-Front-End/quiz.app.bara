

var questions = [
    {
      question: "من يسكن البحر ويحبه الناس؟",
      options: ["سبونج بوب", "شفيق", "مستر سلطع", "دورا"],
      answer: 0
    },
    {
      question: "color sky?",
      options: ["red", "blue", "qreen", "yallo"],
      answer: 1 
},
{
    question: "What is the capital of France?",
options: ["Paris", "London", "Rome", "Madrid"],
answer: 0

},
{
question: "What is the color of the sky?",
options: ["Red", "green", "Blue", "Yellow"],
answer: 2
},
{
question: "my favourit person?",
options: ["amro hasan","abd al haleem","wael jassar","all"],
answer:1
},
{
    question: "easy language?",
    options: ["arabic","english","franch","non"],
    answer:3
},
{
    question: "favourit drink?",
    options: ["tea","coffe","juse","water"],
    answer: 3
},
 {
    question: "my favourit person?",
    options: ["amro hasan","abd al haleem","wael jassar","all"],
    answer:1
    },
    {
        question: "easy language?",
        options: ["arabic","english","franch","non"],
        answer:3
    },
    {
        question: "favourit drink?",
        options: ["tea","coffe","juse","water"],
        answer: 3
    },
    {
        question: "my favourit person?",
        options: ["amro hasan","abd al haleem","wael jassar","all"],
        answer:1
        },
        {
            question: "easy language?",
            options: ["arabic","english","franch","non"],
            answer:3
        },
];
    



const playerName = document.querySelector('.text');
const start = document.getElementById('start');
const main = document.getElementById('main');
const divquestion = document.getElementById('divquestion');
var questionContainer = document.getElementById("question-container");
var submitButton = document.getElementById("submit-button");
var resultContainer = document.getElementById("result");

var currentQuestionIndex = 0;
var selectedOptionIndex = -1;
var score = 0;



function Start() {
    var name = playerName.value;
    if(name.trim() == ""){
      alert("Please Enter the name!");
    }   
   else{
    displayQuestion();
   }
}



start.addEventListener('click' , (event)=>{
      event.preventDefault();
      Start();
     
})








// Function to display the current question and its options
function displayQuestion() {
  main.style.display = 'none';
  divquestion.style.display = 'block';
    var currentQuestion = questions[currentQuestionIndex];
    questionContainer.textContent = "";
  
    var question = document.createElement("h2");
    question.textContent = currentQuestion.question;
    questionContainer.appendChild(question);

    var options = document.createElement("div");

    for (var i = 0; i < currentQuestion.options.length; i++) {
        var option = document.createElement("label");
        option.textContent = currentQuestion.options[i];

        var radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "option";
        radio.value = i;
        radio.addEventListener("change", selectOption);

        option.appendChild(radio);
        options.appendChild(option);
    }

    questionContainer.appendChild(options);

    submitButton.style.display = "none";
    resultContainer.textContent = "";
}

// Function to handle option selection
function selectOption(event) {
    selectedOptionIndex = parseInt(event.target.value);
    submitButton.style.display = "block";
}

// Function to handle the "Submit" button click
function submitAnswer() {
    if (selectedOptionIndex !== -1) {
        var currentQuestion = questions[currentQuestionIndex];

        if (selectedOptionIndex === currentQuestion.answer) {
            score++;
        }

        selectedOptionIndex = -1;
        currentQuestionIndex++;

        // Check if there are more questions
        if (currentQuestionIndex < questions.length) {
            displayQuestion();
        } else {
            // No more questions, display the final score
            resultContainer.textContent = "Your score: " + score + "/" + questions.length;
            questionContainer.textContent = "";
            submitButton.style.display = "none";
        }
    }
}

submitButton.addEventListener("click", submitAnswer);

