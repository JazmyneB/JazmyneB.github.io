

var searchEl = document.querySelector("#search");
var currentEl = document.getElementById("city-Lookup");
var currentStatus = document.getElementById("current-info");

//API URL
var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

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

    fetch(apiUrl + cityEl.value + "&units=imperial&appid=55d754b5ee491bdb9f01f7162bd9bbd5").then(function(response){
        //console.log(response.json()); //Getting the promise
        //Need Name: Date to display
        //Need Temp, Wind, Humidity & UV Index
        if (response.ok) {
             response.json().then(function(data) {
               displayCurrent(cityEl.value, data.main.temp,data.main.humidity,data.wind.speed, data.coord.lat,data.coord.lon);
             });
           } else {
             alert("Error: Please check spelling");
           }
    
    });

};

var displayCurrent = function(name, temp, humid, wind, lat, long){
    var currentDate = moment();
    var now = currentDate.format('l');

    
            currentEl.innerHTML = name + " (" + now + ")";
            // response.json().then(function(data){
                 //var uv = data.current.uvi;
            currentStatus.innerHTML = "<div class = 'row'> Temp: " + temp +"\xB0F </div> <br>  <div class = 'row'> Wind: " + wind + " MPH </div> <br> <div class='row'> Humidity: " + humid + " % </div>" ;
        // });
        //getUV(lat, long);
    

    var apiOne = "https://api.openweathermap.org/data/2.5/onecall?lat=";

    fetch(apiOne + lat + "&lon=" + long + "&units=imperial&appid=" + apiKey).then(function(response){
        //console.log(response.json())
         if (response.ok){
             response.json().then(function(data){
                console.log(data);
                //var dayOne = moment(data.daily[1].dt);
                //var dayPlus = dayOne.format("l");
                //console.log(dayPlus);
                var uv = data.current.uvi;
                if (data.current.uvi === 0){
                    uv = "0";
                }
                currentStatus.innerHTML += "<br><div class='row'> UV Index: <span class='badge badge-success'> "+ uv + "<span></div>";
                //forecast(name);
                //console.log(currentDate.add(1, 'd').format('l'));
                for (var i=0; i < 5; i++){
                    k = 1;
                    var dailyEl = document.getElementById("Day"+i);
                    dailyEl.innerHTML = "<h5 class='font-weight-bold'>" + currentDate.add(k, 'd').format('l')  + "</h5> <br> <div class='row'> Temp: " + data.daily[i].temp.day + "\xB0F</div><div  class='row'> Wind: " + data.daily[i].wind_speed + " MPH</div><div class ='row'> Humidity: " + data.daily[i].humidity + "%</div>"; 
                }

                
             }) 
         }
        })
};

// var forecast = function(name){

//     var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=";

//     fetch(apiUrl + name + "&units=imperial&appid=55d754b5ee491bdb9f01f7162bd9bbd5").then(function(response){
//         if (response.ok){
//             response.json().then(function(data){
//                 console.log(data);
//             })
//         }
//     })

//     var tet = 1623520800;
//     var test = moment(tet);
//     console.log(tet);
//     console.log(new SimpleDateFormat("H:mm  dd MMM yy").format(new Date(tet*1000)));


// }



searchEl.addEventListener("click", grabCity);

