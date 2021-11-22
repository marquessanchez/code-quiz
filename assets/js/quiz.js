var





const myQuestions = [
    {
        question: "What does HTML stand for?",
        answers: {
            A: "Hypertext Markup Language",
            B: "Hypertext Markdown Language",
            C: "Hyertext Modem Language",
            D: "Hypertext Modern Language"
        },
        correctAnswer: "A"
    },
    
    {
        question: "What does CSS stand for?",
        answers: {
            A: "Cascading Select Stlye",
            B: "Cascading Style Sheet",
            C: "Hypertext Selection Sheet",
            D: "None of the above"
        },
        correctAnswer: "B"
    },

    {
        question: "Which of the following is NOT a javascript data type?",
        answers: {
            A: "Object",
            B: "Null",
            C: "Undefined",
            D: "Array"
        },
        correctAnswer: "D"
    },
    
    {
        question: "Which statement is true?",
        answers: {
            A: "2===two",
            B: "2===1+1",
            C: "500===500",
            D: "2+2===4",
        },
        correctAnswer: "C"
    },

    {
        question: "Which of the following is NOT a semantic element?",
        answers: {
            A: "<h2>",
            B: "<div>",
            C: "<header>",
            D: "<main>"
        },
        answer: "A"
    },

    {
        question: "Which of the following is NOT a component of the box model?",
        answers: {
            A: "Padding",
            B: "Content",
            C: "Display",
            D: "Border",
        },
        answer: "B"
    },
];

// create start quiz button
var editButtonEl = document.createElement("button");
editButtonEl.textContent = "Start Quiz";
editButtonEl.className = "btn start-btn";
editButtonEl.setAttribute("data-task-id", taskId);