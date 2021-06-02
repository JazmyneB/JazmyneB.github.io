//Jazmyne B.

//Counter to keep score
var score = 0;
//Array containing Questions, Options, and Answers
var quest = [{q:"JavaScript DataTypes include: ",opt:['Dictionaries', 'List', 'Object', 'None'], a: "Object"},
            {q:"Arrays in JavaScript can be used to store: ", opt:['Strings', 'Multiple Values', 'Booleans', "All of the above"], a:"All of the above"},
            {q:"What command is used in Github to check which branch you are working in?", opt:["Git checkout", "Git merge", "Git branch", "Git status"], a:"Git branch"},
            {q:"This is when we create a function by assigning it to a variable.",opt: ["Function Expression", "Function Declaration", "Function", "All of the Above"], a: "Function Expression"},
            {q:"This is when we create a function using the keyword.",opt: ["Function Expression", "Function Declaration", "Function", "All of the Above"], a: "Function Declaration"},
            {q:"A predefined action that we can call or invoke in our code is called what?",opt: ["Function Expression", "Function Declaration", "Function", "All of the Above"], a: "Function"},
            {q:"Which function tells the browser to display a message to the user", opt:["prompt()", "confirm()", "alert()", "none of the above"], a:"alert()"},
            {q:"Which function allows users to enter information in a program?",opt:["prompt()", "confirm()", "alert()", "none of the above"], a:"prompt()"},
            {q:"Information that a user enters into a program is often referred to as what?", opt:["User Variable", "User Info", "User Answer", "User Input"], a:"User Input"},
            {q:"How do you comment in JavaScript?",opt:["/*", "//", "<!-- --!>", "#"], a:"//"},
            {q:"Which git command is used to switch branches?", opt: ["Git checkout", "Git merge", "Git branch", "Git status"], a:"Git checkout"},
            {q:"Which git command is used to combine branches together?", opt: ["Git checkout", "Git merge", "Git branch", "Git status"], a:"Git merge"}

];
record = [
    {name: "Jack",
    points: 10}
];
//When the button is clicked
var startB = document.querySelector("#start");
var timerEl = document.querySelector("#countdown");
var optEl = document.querySelector("#options");
var shows = document.querySelector("#quiz");
var bools = document.querySelector("#response");
var points = document.querySelector("#score");

var listitems = [];

var timeLeft = 75;
var k = 0;

//Setting the timer to countdown from 75
function countdown(){
   // var timeLeft = 75;
   //document.getElementById("container").style.visibility = "hidden";

    //Decrementing time and displaying text
    var timeInterval = setInterval(function(){
        //timerEl.textContent = timeLeft;
        timeLeft--;
        //points.textContent = "Your Score: " + score;
        timerEl.textContent = "Time Remaining: " + timeLeft;

        //Stop Timer when it reaches 0, so it won't continue counting down to negative numbers
        if (timeLeft <= 0){
            timerEl.textContent = 0;
            clearInterval(timeInterval);
            //alert("Quiz Over");
            quizEnd();
        }

}, 1000);
    //Starts displaying Questions
    showQuiz();
    
};



function showQuiz(){
    
   

    //Displays Question from Array
    //shows.textContent = quest[k].q + "<br>";

    var ol = document.createElement("ol");
    var options = document.createElement("li");
    //ol.appendChild(options);

        //listitems.push(quest[k].q);
        //console.log(listitems);
        shows.innerHTML = "<br>" + quest[k].q + "<br>";

    for (var i = 0; i < quest[k].opt.length; i++){
        var select = document.createElement("button")
       // console.log(quest[k].opt[i]);
        choices = quest[k].opt[i];
        
        select.textContent =  (i+1) + ". " + choices;
        select.value = choices
        //console.log(select);
        select.addEventListener("click", function(i){
            console.log(event + k);
            checkAnswer(event, k);
            //increment()
        });
        shows.appendChild(select);
       // listitems.pop();
        
        
        
    }
    
    //shows.appendChild(select);
    //listitems.pop();


    //increment();

     
};


//Function to check whether the correct answer was chosen
function checkAnswer(event, index){
    
    //event.preventDefault();
//Testing to see if value from clicked button is being recoreded properly
    //console.log(event.target.value);

    //User's choice selected
    var answer = event.target.value; 
    
//Lets make sure we're compaaring the correct questions with answers based on index
    //console.log(answer, index, quest[index].a);

    

    if (answer != quest[index].a){
        console.log("False");
        timeLeft = timeLeft - 10;
        console.log(timeLeft);
        points.textContent = "Your SCORE: " + score;
        bools.textContent += "WRONG!";
        setTimeout(function(){
            bools.textContent = '';
        }, 900);
        //increment();
        
    } else{
        bools.textContent += "Correct!";
        setTimeout(function(){
            bools.textContent = '';
        }, 900);
        score += 10;
        points.textContent = "Your SCORE: " + score;
        //increment();
    }
    
    //console.log(timeLeft);
    //console.log(score);
    //console.log(k);
    k++;
    if (timeLeft >= 0 && k < quest.length){
        setTimeout(function(){
            showQuiz();

        }, 1000);
        //showQuiz();
    } 
    else if (timeLeft === 0){
        quizEnd();
    }
    else{
        //alert("Quiz Over");
        //timeLeft = 0;
        //shows.innerHTML += "Your Score is: " + score; 
        quizEnd();
    }

};

function quizEnd(){
    timeLeft = 0;
    //alert("Quiz Over");
    shows.textContent = "Your score is: " + score;
    setTimeout(function(){
        recordScore();
    }, 1000);
    //recordScore();

}

function recordScore(){
    //var userName = prompt("Please enter your name: ");
    var userIn = document.createElement("INPUT");
    userIn.setAttribute("type", "text");
    userIn.setAttribute("id", "userName");
    shows.textContent = "Your Score: " + score;
    shows.innerHTML += "<br>" + "Please Enter Your Name: ";
    shows.appendChild(userIn);
    var subBtn = document.createElement("INPUT");
    subBtn.setAttribute("type", "button");
    subBtn.value = "Submit";
    subBtn.addEventListener("click", function(){
        var userName = document.getElementById("userName").value;
        console.log(userName);
        record.push({name:userName, points: score});
        console.log(record)
        showHighScore();
    })
    shows.appendChild(subBtn);
    //record.name = userName;
    //record.name += userName;
    //record[userName].points = score;
    //console.log(record);
    //showHighScore();
}

function showHighScore(){

    for(var i = 0; i <record.length; i++){
        console.log(record[i].name);
        console.log(record[i].score);
    }

    shows.textContent = "Name: " + record.name + "         High Score: " + score;

}



//Start TImer? But we want to start timer and display quiz when button is clicked
startB.onclick = countdown;
