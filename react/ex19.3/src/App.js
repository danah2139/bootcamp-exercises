import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
	const [term, setTerm] = useState('hooks');
	const [results, setResults] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const fetchData = async () => {
		try {
			const { data } = await axios.get(
				`https://hn.algolia.com/api/v1/search?query=${term}`
			);
			setResults(
				data.hits.map((el) => ({
					title: el.title,
					id: el.objectID,
					link: el.url,
				}))
			);
		} catch (e) {
			setErrorMessage(e.message);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	const renderItems = () => {
		if (!results.length && !errorMessage) {
			return <div>Loading...</div>;
		} else if (!results.length) {
			return <div>{errorMessage}</div>;
		}
		return results.map((result) => (
			<li>
				<a href={result.link}>{result.title}</a>
			</li>
		));
	};

	const handleSearchTerm = () => {
		fetchData();
	};
	return (
		<div className="App">
			<h2>Algolia Search</h2>
			<div>
				<input
					type="text"
					onChange={(e) => {
						setTerm(e.target.value);
					}}
					value={term}
				/>
				<button onClick={handleSearchTerm}>Search</button>
			</div>
			<ul>{renderItems()}</ul>
		</div>
	);
};

export default App;
