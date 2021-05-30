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
            {q:"How do you comment in JavaScript?",opt:["/*", "//", "<!-- --!>", "#"], a:"//"}
];
//When the button is clicked
var startB = document.querySelector("#start");
var timerEl = document.querySelector("#countdown");
var optEl = document.querySelector("#options");
var shows = document.querySelector("#quiz");

var listitems = [];

var timeLeft = 75;
var k = 0;

//Setting the timer to countdown from 75
function countdown(){
   // var timeLeft = 75;
   document.getElementById("container").style.visibility = "hidden";

    //Decrementing time and displaying text
    var timeInterval = setInterval(function(){
        timerEl.textContent = timeLeft;
        timeLeft--;

        //Stop Timer when it reaches 0, so it won't continue counting down to negative numbers
        if (timeLeft === 0){
            timerEl.textContent = timeLeft;
            clearInterval(timeInterval);
        }

}, 1000);
    //Starts displaying Questions
    showQuiz();
    
};

function showQuiz(){
    
    //document.getElementById("container").style.visibility = "hidden";
     
    // var timeInterval = setInterval(function(){
    //     timerEl.textContent = timeLeft;
    //      timeLeft--;
        
    // }, 1000);

    // if (timeLeft === 0){
    //     timerEl.textContent = timeLeft;
    //     clearInterval(timeInterval);
    // }

    //Displays Question from Array
    shows.textContent = quest[k].q;

    var ol = document.createElement("ol");
    var options = document.createElement("li");

    shows.appendChild(ol);
    //ol.appendChild(options);


        //listitems.push(quest[k].q);
        //console.log(listitems);
        //shows.innerHTML += "<br>" + listitems + "<br>";

    for (var i = 0; i < quest[k].opt.length; i++){
        var select = document.createElement("button")
        console.log(quest[k].opt[i]);
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
// function increment(){
//     k++;
//     console.log(k);
//     //showQuiz();
// };


//Display Questions and Options
function displayQuiz(){
    //countdown();
   
    //optEl.setAttribute("style", "background: blue");
    //shows.appendChild(timerEl);

    //Loops through Quest Array to grab the Questions and Options
    for (var i = 0; i < quest.length; i++){
    //var i = 0;
    //while (true) {
        var quizQuest = quest[i].q;
        console.log(quizQuest);
        listitems.push(quizQuest);

        //hides the Intro Content
        document.getElementById("container").style.visibility = "hidden";
       // document.getElementById("countdown").style.visibility= "show";
        
      // document.getElementById("countdown").innerHTML = countdown();

        //Displays Question
        //shows.textContent += listitems[i];
        document.getElementById("quiz").innerHTML += "<br>" + listitems[i] + "<br>";
        //shows.appendChild(listitems[i]);
         //loop to go through Options for each question
         for (var j = 0; j < quest[i].opt.length; j++){
           // console.log(quest[i].opt[j]); // Grabs each option from Opt List

           // Adds button to each option choice
            var selection = document.createElement("button");
            //selection.style.lineBreak = "auto";
            var optVal = quest[i].opt[j];
            //console.log(optVal);
            
            //Add Value to Each button
            selection.value = optVal;
            selection.addEventListener("click", function(){
                checkAnswer(event, i-1);
            });
            selection.textContent = (j+1) + ". " + optVal;
            console.log(selection);

            

            //Displays Option Choices
            shows.appendChild(selection);
            //document.getElementById("options").innerHTML += selection + "<br>";

           // var quizOpt = quest[i].opt[j];
             //shows.textContent = quizQuest + quizOpt;
        // }
        //optEl.textContent = quest[i].opt;
        //This displays question and Options in One line, with Commas in b/w options
        //shows.textContent = quizQuest;
         }
        

         //selection.addEventListener("click", checkAnswer);
         //selection.onclick = checkAnswer;
    }
    
    


};

//Function to check whether the correct answer was chosen
function checkAnswer(event, index){
    
    event.preventDefault();
//Testing to see if value from clicked button is being recoreded properly
    //console.log(event.target.value);

    //User's choice selected
    var answer = event.target.value; 
    
//Lets make sure we're compaaring the correct questions with answers based on index
    //console.log(answer, index, quest[index].a);

    

    if (answer != quest[index].a){
        //console.log("False");
        timerLeft = timeLeft - 10;
        console.log(timeLeft);
        shows.innerHTML += "<br>" + "WRONG!";
        //increment();
        
    } else{
        shows.innerHTML += "<br>" + "Correct!";
        score += 10;
        //increment();
    }
    
    console.log(timeLeft);
    console.log(score);
    //console.log(k);
    k++;
    if (timeLeft != 0 && k < quest.length){
        showQuiz();
    } else{
        alert("Quiz Over");
        shows.innerHTML += "Your Score is: " + score; 
    }

};



//Start TImer? But we want to start timer and display quiz when button is clicked
startB.onclick = countdown;
