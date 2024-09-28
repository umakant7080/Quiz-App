const questions = [
       {
        question: "Which is larget animal  in the world? ",
        answers: [
            
            { text: "Shark",correct: false},
            { text: "Blue whate",correct: true},
            { text: "Elephant",correct: false},
            { text: "Giraffe",correct: false},
                ]
        },
         {
        question: "Which is smallest counrty in the world? ",
        answers: [
            
            { text: "Vatican City",correct: true},
            { text: "Bhutan",corret: false},
            { text: "Nepal",correct: false},
            { text: "Shri Lanka",correct: false},
                 ]
        },
        {
        question: "Which is the largest desert in the world? ",
        answers: [
            
            { text: "Kalahari",correct: false},
            { text: "Gobi",correct: false},
            { text: "Sahara",correct:false },
            { text: "Antarctica",correct: true},
                 ]
       },
       {
        question: "Which is smallest continent in the world? ",
        answers: [
            
            { text: "Asia",correct: false},
            { text: "Australia",correct: true},
            { text: "Arctic",correct: false},
            { text: "Africa",correct: false},
                  ]
        },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currnetQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currnetQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currnetQuestionIndex];
    let questionNo = currnetQuestionIndex + 1;
    questionElement.innerHTML = questionNo  + ". " + currentQuestion.question;


    currentQuestion.answers.forEach(answer  => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);

    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild (answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    
    Array.from(answerButton.children).forEach(button => {   
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        } 
          button.disabled = true; 
    });
    nextButton.style.display = "block"

}
function showScore(){
    resetState();

   
    questionElement.innerHTML = ` You scored ${score} out of ${questions.length}!`;


    nextButton.innerHTML = "play Again";
    nextButton.style.display  = "block";
}
function handleNextButton(){
    currnetQuestionIndex++;
    if(currnetQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }

}

nextButton.addEventListener("click",  ()=>{
    if(currnetQuestionIndex < questions.length){
        handleNextButton();

    }else{
        startQuiz();
    }


});

startQuiz();

 