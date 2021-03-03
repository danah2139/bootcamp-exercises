const form = document.getElementById('form');
let apiKey = '3211a158';
let movieName = '';
const baseEndpoind = `http://www.omdbapi.com/?t=`;
const inputUser = document.querySelector('[type="text"]');
const btn = document.querySelector('[type="submit"]');
const container = document.querySelector('.container');
let card = '';
async function getData() {
	try {
		let movieEndpoint = baseEndpoind + `${movieName}&&apikey=${apiKey}`;
		const response = await fetch(movieEndpoint);
		if (response.status !== 200) {
			throw 'not found';
		}
		const data = await response.json();
		let imgData = data.Poster;
		let title = data.Title;
		let genere = data.Genre;
		let year = data.Year;
		let plot = data.Plot;
		let director = data.Director;
		let actors = data.Actors;
		let ratings = data.Ratings;
		displayCard(imgData, title, genere, year, plot, director, actors, ratings);
	} catch (e) {
		console.log(e);
	}
}

function displayCard(
	imgData,
	title,
	genere,
	year,
	plot,
	director,
	actors,
	ratings
) {
	card = document.createElement('div');
	card.classList.add('card');
	let img = document.createElement('img');
	img.src = imgData;
	card.appendChild(img);
	let movieTitle = document.createElement('p');
	movieTitle.textContent = title;
	card.appendChild(movieTitle);
	let genereMovie = document.createElement('p');
	genereMovie.textContent = genere;
	card.appendChild(genereMovie);
	let yearMovie = document.createElement('p');
	yearMovie.textContent = year;
	card.appendChild(yearMovie);
	let plotMovie = document.createElement('p');
	plotMovie.textContent = plot;
	card.appendChild(plotMovie);
	let directorMovie = document.createElement('p');
	directorMovie.textContent = director;
	card.appendChild(directorMovie);
	let actorsMovie = document.createElement('p');
	actorsMovie.textContent = actors;
	card.appendChild(actorsMovie);
	ratings.forEach((rat) => {
		console.log(rat.Source);
		if (rat.Source === 'Rotten Tomatoes') {
			let ratingTomatos = document.createElement('p');
			ratingTomatos.textContent = `Rotten Tomatoes: ${rat.Value}`;
			card.appendChild(ratingTomatos);
		} else if (rat.Source === 'Metacritic') {
			let ratingMetacritic = document.createElement('p');
			ratingMetacritic.textContent = `Metacritic: ${rat.Value}`;
			card.appendChild(ratingMetacritic);
		}
	});
	container.appendChild(card);
}

form.addEventListener('submit', (e) => {
	if (card !== '') {
		container.removeChild(card);
	}
	e.preventDefault();
	movieName = inputUser.value;
	if (movieName !== '') {
		getData();
	}
	inputUser.value = '';
});
