

var todayEl = document.querySelector("#currentDay");
//var textIn = document.querySelector("9am");



//Grabbing current date
var now = moment();
//The Current Hour
var nowHour = now.format("h");
//console.log(nowHour);

//Display Current Date
todayEl.textContent = now.format("dddd MMMM Do");

//if (nowHour )


//When the save button is clicked,
//we want to save the content on the textArea
$(".saveBtn").on("click", function(){
    //get text
    //console.log($(this));

    //.siblings() method gets the elements that shares a parent
    //console.log($(this.siblings()));
    //Need the class of sibling element 
    //console.log($(this).siblings(".form-control"));
    //has .val prop from console inspection
    //console.log($(this).siblings(".form-control").val());
    var textIn = $(this).siblings(".form-control").val();

    //Save item in local storage with key ...
    //Key should be ID?? to know which block is being recorded on...
    localStorage.setItem("9", textIn);
    //how to grab ID from textarea?
    console.log($(this).parent().attr("id"));
    console.log(localStorage.getItem("9"));
    //console.log($("9 .form-control").val(localStorage.getItem("9")));

});

//console.log($("9am .form-control").val(localStorage.getItem("9am")));