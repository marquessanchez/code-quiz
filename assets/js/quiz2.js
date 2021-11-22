var pageContentEl = document.querySelector("#page-content");
var currentQuestion



myQuestions= [
    {
        question: "What does HTML stand for?",
        answers: {
            choice1: "Hypertext Markup Language",
            choice2: "Hypertext Markdown Language",
            choice3: "Hyertext Modem Language",
            choice4: "Hypertext Modern Language"
        },
        correctAnswer: "Hypertext Markup Language"
    },
    
    {
        question: "What does CSS stand for?",
        answers: {
            choice1: "Cascading Select Stlye",
            choice2: "Cascading Style Sheet",
            choice3: "Hypertext Selection Sheet",
            choice4: "None of the above"
        },
        correctAnswer: "Cascading Style Sheet"
    },

    {
        question: "Which of the following is NOT a javascript data type?",
        answers: {
            choice1: "Object",
            choice2: "Null",
            choice3: "Undefined",
            choice4: "Array"
        },
        correctAnswer: "Array"
    },
    
    {
        question: "Which statement is true?",
        answers: {
            choice1: "2===two",
            choice2: "2===1+1",
            choice3: "500===500",
            choice4: "2+2===4",
        },
        correctAnswer: "500===500"
    },

    {
        question: "Which of the following is NOT a semantic element?",
        answers: {
            choice1: "<h2>",
            choice2: "<div>",
            choice3: "<header>",
            choice4: "<main>"
        },
        answer: "<h2>"
    },

    {
        question: "Which of the following is NOT a component of the box model?",
        answers: {
            choice1: "Padding",
            choice2: "Content",
            choice3: "Display",
            choice4: "Border",
        },
        answer: "Content"
    },
];

var startButton = function (startButton) {
    startButton = document.queryselector("start-quiz");
    document.getElementById('start-quiz').click;
    
}



