import React, { useState, useEffect } from 'react';

import './App.css';

const App = () => {
	const [movieData, setMovieData] = useState('');
	useEffect(() => {
		(async () => {
			const response = await fetch('https://swapi.dev/api/films/1/');
			const data = await response.json();
			console.log(data.title);
			setMovieData(data);
		})();
		console.log('hi', movieData);
	}, []);

	return (
		<div className="App">
			<h2>{movieData.title}</h2>
			<p>{movieData.director}</p>
		</div>
	);
};

export default App;
