

var searchEl = document.querySelector("#search");

//API URL
var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=";

var apiKey = "55d754b5ee491bdb9f01f7162bd9bbd5";

// fetch(apiUrl + "Houston" + "&appid=55d754b5ee491bdb9f01f7162bd9bbd5").then(function(response){
//     console.log(response.json());

// });


var grabCity = function(event){
    event.preventDefault();
    //make sure button is working
    //conole.log(event);
    //console.log(document.getElementById("city").value);
    var cityEl = document.getElementById("city");
    console.log(cityEl.value);

    fetch(apiUrl + cityEl.value + "&appid=55d754b5ee491bdb9f01f7162bd9bbd5").then(function(response){
        console.log(response.json()); //Getting the promise
    
    });

};

searchEl.addEventListener("click", grabCity);

