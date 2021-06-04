

var todayEl = document.querySelector("#currentDay");
//Grabbing current date
var now = moment();

//Display Current Date
todayEl.textContent = now.format("dddd MMMM Do");