var startButton = document.getElementById('start-button');
var startContainer = document.getElementById('start-container');
var questionsContainer = document.getElementById('question-container'); 
var endContainer = document.getElementById('end-container'); 
var questionEl = document.getElementById('questions');
var answerEl = document.getElementById('answer-btn');
var nextButton = document.getElementById('next-button');
var randomQuestion;
var currentQuestion;
var score = 0;
var button;

//Variables for Timer
var timerEl = document.getElementById('timer-count');
var timer;
var timerCount;


//This event starts the game
startButton.addEventListener('click', startQuiz);

//This event changes questions
nextButton.addEventListener('click', () => {
    currentQuestion++;
    nextQuestion();
})

//Hides initial instructions, then selects a question to show and starts the timer count
function startQuiz () {
    console.log('Quiz is starting');
    startContainer.classList.add('hidden');
    randomQuestion = questions.sort(()=>.5-Math.random());
    currentQuestion= 0;
    questionsContainer.classList.remove('hidden');
    nextQuestion();
    startTimer()
}

// 
function startTimer(){

}

//Calls the next question and resets everything to a default state
function nextQuestion(){
    resetState();
    showQuestion(randomQuestion[currentQuestion]);
}

// Replaces the holder text with the questions and answers array
function showQuestion(question){
    questionEl.innerText = question.question;
    question.answers.forEach(answer =>{
        button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('buttons');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerEl.appendChild(button);
    })
}

function resetState (){
    nextButton.classList.add('hidden');
    while (answerEl.firstChild) {
        answerEl.removeChild(answerEl.firstChild);
    }
}

function selectAnswer (e) {
   var clickedButton = e.target;
   var correct = clickedButton.dataset.correct;
   Array.from(answerEl.children).forEach(button => {
       checkAnswer(button, button.dataset.correct);
   })
   if (randomQuestion.length > currentQuestion +1) {
    nextButton.classList.remove('hidden');
   }
   else {
       showHighscore()
   }
}

//Checks if the answer selected is right or wrong, changes the visual look of it, and takes time off the timer 
function checkAnswer(element, correct){
    clearAnswer(element)
    if (correct) {
        element.classList.add('correct');
    }
    else {
        element.classList.add('wrong');
    }
}

//Sets the answer buttons back to original state
function clearAnswer (element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');

}

function showHighscore () {
    questionsContainer.classList.add('hidden');
    endContainer.classList.remove('hidden');
}

//Array of questions for the quiz

var questions = [
    {
        question: 'Which type of language is JavaScript?',
        answers: [
            {text: 'Object-Oriented', correct:false},
            {text: 'Object-Based', correct:true},
            {text: 'Assembly-language', correct:false},
            {text: 'High-level', correct:false},
        ]
    },
    {
        question: 'Commonly used data types DO NOT include:',
        answers: [
            {text: 'Strings', correct:false},
            {text: 'Booleans', correct:false},
            {text: 'Alerts', correct:true},
            {text: 'Numbers', correct:false},
        ]
    },
    {
        question: 'The condition inside an if/else statement is enclosed within',
        answers: [
            {text: 'Curly Brackets {} ', correct:true},
            {text: 'Quotes "" ', correct:false},
            {text: 'Parenthesis () ', correct:false},
            {text: 'Square Brackets [] ', correct:false},
        ]
    },
    {
        question: 'Arrays can be used to store',
        answers: [
            {text: 'Strings', correct:false},
            {text: 'Numbers', correct:false},
            {text: 'Other arrays', correct:false},
            {text: 'All the above', correct:true},
        ]
    },
    {
        question: 'Strings should be within _____ when being assigned to variables',
        answers: [
            {text: 'Parenthesis () ', correct:false},
            {text: 'Square Brackets [] ', correct:false},
            {text: 'Quotes "', correct:true},
            {text: 'Curly Brackets {} ', correct:false},
        ]
    },
]