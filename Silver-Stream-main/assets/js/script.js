
$(document).foundation();//initializes foundation
var urlPoster = "https://image.tmdb.org/t/p/original";//url for posters. Image location should be added on.
var sortedGenre = [];
movies = [];
savedMovies = [];

var sortGenre = function (event) {
	var url = document.location.href;
	var genreID = url.split("=")[1];

	sortedGenre = [];
	$(".accordion-item").remove();
	console.log(genreID);
	for (let i = 0; i < movies.length; i++) {
		for (let j = 0; j < movies[i].genre.length; j++) {
			if (genreID == movies[i].genre[j]) {
				sortedGenre.push(movies[i]);
			}
		}
	}
	displaySorted();
	console.log(sortedGenre);
}

//utelly settings to pass url
var utelly = function (event) {
	var movieID = event.id;
	console.log(movieID);

	fetch("https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/idlookup?source_id=" + movieID + "&source=imdb&country=us", {
		"method": "GET",
		"headers": {
			"x-rapidapi-key": "69b980341fmsh2b7d3a3dc6d32b3p1f8da7jsn0c865af8dcf9",
			"x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com"
		}
	})
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			console.log("Utelly response");
			console.log(data);
				for (var i = 0; i < data.collection.locations.length; i++) {
					var service = document.createElement("a");
					service.setAttribute("href", data.collection.locations[i].url);
					service.setAttribute("target", "_blank");
					service.className = "stream-badge";
					var icon = document.createElement("img");
					icon.setAttribute("src", data.collection.locations[i].icon);
					service.appendChild(icon);
					event.append(service);
			}
		})
		.catch(function (err) {
			console.error(err);
			var h3 = document.createElement("h3");
			h3.textContent = "Not available for streaming";
			event.append(h3);
		});
}

var displaySorted = function () {
	for (var i = 0; i < sortedGenre.length; i++) {
		//poster button
		var button = $("<button>").addClass("pointer").attr("data-open", sortedGenre[i].imdb);
		var posterIn = $("<img>").attr("src", urlPoster + sortedGenre[i].poster).addClass("movie-poster");

		//append button
		button.append(posterIn);
		$("#movies-display").append(button);

		//reveal modal
		var reveal = $("<div>").addClass("reveal grid-container").attr("id", sortedGenre[i].imdb).attr("data-reveal", "");
		var mediaObj = $("<div>").addClass("media-object grid-x align-center");
		var mediaObjSecImg = $("<div>").addClass("media-object-section shrink cell");
		var posterOut = $("<img>").addClass("movie-poster-out").attr("src", urlPoster + sortedGenre[i].poster);
		var mediaObjSecInfo = $("<div>").addClass("media-object-section cell");
		var title = $("<h3>").text(sortedGenre[i].title);
		var release = $("<p>").text(sortedGenre[i].release);
		var overview = $("<p>").text(sortedGenre[i].overview);
		var save = $("<button>").text("Save to favorites").attr("type", "button").addClass("button saveButton cell").attr("id", i);
		var streamServices = $("<button>").text("Click to see streaming services").attr("type", "button").addClass("button streamButton cell");
		var buttonClose = $("<button>").addClass("close-button").attr("type", "button").attr("data-close", "").attr("aria-label", "Close modal");
		var plus = $("<span>").text("x").attr("aria-hidden", "true");

		save.one("click", function(event) {
			var id = event.target.id;
			saveFavorites(id);
		})

		button.on("click", function (event) {
			event.preventDefault();
			var reveal = '#' + $(this).attr('data-open');
			console.log(reveal);
			var popup = new Foundation.Reveal($(reveal));
			popup.open();
		});

		streamServices.on("click", function (event) {
			console.log(event.target.parentNode);
			utelly(event.target.parentNode);
			event.target.remove();
		})

		//appending
		mediaObjSecImg.append(posterOut);
		mediaObjSecInfo.append(title);
		mediaObjSecInfo.append(release);
		mediaObjSecInfo.append(overview);
		mediaObj.append(mediaObjSecImg);
		mediaObj.append(mediaObjSecInfo);
		buttonClose.append(plus);
		reveal.append(mediaObj);
		reveal.append(buttonClose);
		reveal.append(save);
		reveal.append(streamServices);
		$("#movies-display").append(button);
		$("#modal-display").append(reveal);
	}
}

var loadPage = function () {
	movies = JSON.parse(localStorage.getItem("movies"));
	console.log(movies);
	sortGenre()
}

var saveFavorites = function(id) {
	console.log(sortedGenre[id]);
	savedMovies.push(sortedGenre[id]);
	console.log(savedMovies);
	window.localStorage.setItem("savedMovies", JSON.stringify(savedMovies));
}

var loadFavorites = function() {
	tempMovies = JSON.parse(localStorage.getItem("savedMovies"));
	if(tempMovies != null) {
		savedMovies = tempMovies;
	}
}



loadPage();
loadFavorites();
