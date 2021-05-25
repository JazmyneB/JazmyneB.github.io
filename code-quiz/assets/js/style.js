//Jazmyne B.

//Counter to keep score
var score = 0;
//Array containing Questions, Options, and Answers
var quest = [{q:"JavaScript DataTypes include: ",opt:['Dictionaries', 'List', 'Objects', 'None'], a: "Object"},
            {q:"Arrays in JavaScript can be used to store: ", opt:['Strings', 'Multiple Values', 'Booleans', "All of the above"], a:"All of the above"},
            {q:"What command is used in Github to check which branch you are working in?", opt:["Git checkout", "Git merge", "Git branch", "Git status"], a:"Git branch"},
            {q:"This is when we create a function by assigning it to a variable.",opt: ["Function Expression", "Function Declaration", "Function", "All of the Above"], a: "Function Expression"},
            {q:"This is when we create a function using the keyword.",opt: ["Function Expression", "Function Declaration", "Function", "All of the Above"], a: "Function Declaration"},
            {q:"A predefined action that we can call or invoke in our code is called what?",opt: ["Function Expression", "Function Declaration", "Function", "All of the Above"], a: "Function"},
            {q:"Which function tells the browser to display a message to the user", opt:["prompt()", "confirm()", "alert()", "none of the above"], a:"alert()"},
            {q:"Which function allows users to enter information in a program?",opt:["prompt()", "confirm()", "alert()", "none of the above"], a:"prompt()"},
            {q:"Information that a user enters into a program is often referred to as what?", opt:["User Variable", "User Info", "User Answer", "User Input"], a:"User Input"},
            {q:"How do you comment in JavaScript?",opt:["/*", "//", "<!-- --!>", "#"], a:"//"}
];
//When the button is clicked
var startB = document.querySelector("#start");
var timerEl = document.querySelector("#countdown");


//Setting the timer
function countdown(){
    var timeLeft = 75;

    var timeInterval = setInterval(function(){
        timerEl.textContent = timeLeft;
        timeLeft--;

}, 1000);
}


function displayQuiz(){
    countdown();


}

startB.onclick = countdown;
