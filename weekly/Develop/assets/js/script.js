

var todayEl = document.querySelector("#currentDay");
//var textIn = document.querySelector("9am");



//Grabbing current date
var now = moment();
//The Current Hour
var nowHour = now.format("H"); // H-> 24 hour h-> 12 hour
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
    //localStorage.setItem("9", textIn);
    //how to grab ID from textarea?
    //Parent is div => class = ROW
    //console.log($(this).parent().attr("id"));
    var localKey = $(this).parent().attr("id");
    localStorage.setItem(localKey, textIn);
    //console.log(localStorage.getItem("9"));
    //console.log($("9 .form-control").val(localStorage.getItem("9")));
    //document.getElementById(localKey+"am").innerHTML = localStorage.getItem(localKey);

});

//how to update class for past, present and future
// if (nowHour < 9){
//     $(".9").addClass("future");
// } else if (nowHour > 9){
//     $(".9").addClass("past");
// } else{
//     $(".9").addClass("present");
// }
var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
//Create a loop to add Past/Present/Future to NOT have repititive code.
for (var i = 0; i<hours.length; i++){
    //Compares the current hour with the time block hour
    if (nowHour < hours[i]){
        $("."+hours[i]).addClass("future");
    } else if (nowHour > hours[i]){
        $("."+hours[i]).addClass("past");
    } else{
        $("."+hours[i]).addClass("present");
    }
}

for (var i = 0; i<hours.length;i++){
    ($("."+hours[i]).val(localStorage.getItem(hours[i])));
}




//console.log($(".9").val(localStorage.getItem("9")));