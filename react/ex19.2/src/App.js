import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
	const [term, setTerm] = useState('');
	const [countries, setCountries] = useState('');
	useEffect(() => {
		(async () => {
			const { data } = await axios.get('https://restcountries.eu/rest/v2/all');
			setCountries(
				data.map((country) => ({ id: country.alpha3Code, name: country.name }))
			);
		})();
	}, []);
	const renderCountries = () => {
		console.log(countries);
		if (!countries.length) return <div>Loading...</div>;
		else {
			return countries
				.filter((country) => country.name.toLowerCase().includes(term))
				.map((country) => <li>{country.name}</li>);
		}
	};
	return (
		<div className="App">
			<div>
				Search
				<input
					type="text"
					value={term}
					onChange={(e) => {
						setTerm(e.target.value);
					}}
				/>
			</div>
			<ul>{renderCountries()}</ul>
		</div>
	);
};

export default App;
