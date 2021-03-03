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
		const movieObj = {
			imgData :data.Poster,
			title = data.Title,
			genere = data.Genre,
			year = data.Year,
			plot = data.Plot,
			director = data.Director,
			actors = data.Actors,
			ratings = data.Ratings,
		};
		
		displayCard(movieObj);
	} catch (e) {
		console.log(e);
	}
}

function displayCard(movieObj) {
	card = document.createElement('div');
	card.classList.add('card');
	let img = document.createElement('img');
	img.src = movieObj.imgData;
	card.appendChild(img);
	let movieTitle = document.createElement('p');
	movieTitle.textContent = movieObj.title;
	card.appendChild(movieTitle);
	let genereMovie = document.createElement('p');
	genereMovie.textContent = movieObj.genere;
	card.appendChild(genereMovie);
	let yearMovie = document.createElement('p');
	yearMovie.textContent = movieObj.year;
	card.appendChild(yearMovie);
	let plotMovie = document.createElement('p');
	plotMovie.textContent = movieObj.plot;
	card.appendChild(plotMovie);
	let directorMovie = document.createElement('p');
	directorMovie.textContent = movieObj.director;
	card.appendChild(directorMovie);
	let actorsMovie = document.createElement('p');
	actorsMovie.textContent = movieObj.actors;
	card.appendChild(actorsMovie);
	movieObj.ratings.forEach((rat) => {
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
