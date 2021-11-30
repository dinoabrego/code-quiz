var startButton = document.getElementById('start-button');
var startContainer = document.getElementById('start-container');
var questionsContainer = document.getElementById('question-container'); 
var questionEl = document.getElementById('questions');
var answerEl = document.getElementById('answer-btn');
var nextButton = document.getElementById('next-button');
var randomQuestion;
var currentQuestion;
var score = 0;
var button;


//Starts the Game
startButton.addEventListener('click', startQuiz);

//Hides initial instructions, then selects a question to show
function startQuiz () {
    console.log('Quiz is starting');
    startContainer.classList.add('hidden');
    randomQuestion = questions.sort(()=>.5-Math.random());
    currentQuestion= 0;
    questionsContainer.classList.remove('hidden');
    nextQuestion();

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
   nextButton.classList.remove('hidden');
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


var questions = [
    {
        question: 'Commonly used data types DO NOT include:',
        answers: [
            {text: 'Strings', correct:false},
            {text: 'Booleans', correct:false},
            {text: 'Alerts', correct:true},
            {text: 'Numbers', correct:false},
        ]
    }
]