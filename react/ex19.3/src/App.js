import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
	const [term, setTerm] = useState('hooks');
	const [results, setResults] = useState('');
	useEffect(() => {
		(async () => {
			const { data } = await axios.get(
				`https://hn.algolia.com/api/v1/search?query=${term}`
			);
			console.log(data);
			setResults(
				data.hits.map((el) => ({
					title: el.title,
					id: el.objectID,
					link: el.url,
				}))
			);
		})();
	});

	const renderItems = () => {
		if (!results.length) {
			return <div>Loading...</div>;
		}
		results.map((result) => (
			<li>
				<a href={result.url}>{result.title}</a>
			</li>
		));
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
			</div>
			<ul>{renderItems()}</ul>
		</div>
	);
};

export default App;
