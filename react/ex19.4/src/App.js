import { useState, useEffect } from 'react';
import './App.css';
import ChuckApi from '../src/api/categories';
const App = () => {
	const [joke, setJoke] = useState('');
	const [errorMassage, setErrorMessage] = useState('');
	const [categories, setCategories] = useState(null);
	const getCategories = async () => {
		const { data } = await ChuckApi('categories');
		setCategories(data);
	};
	useEffect(() => {
		getCategories();
	}, []);

	const handleCatagory = async (value) => {
		const { data } = await ChuckApi.get('random', {
			params: { category: value },
		});
		setJoke(data.value);
	};
	const renderCategories = () => {
		if (!categories.length) {
			return <div>Loading...</div>;
		}
		return categories.map((el, i) => (
			<button
				key={i}
				onClick={() => {
					handleCatagory(el);
				}}
			>
				{el}
			</button>
		));
	};

	return (
		<div>
			<h1>Chuck norris jokes</h1>
			{categories && renderCategories()}
			{errorMassage}
			<p>{joke}</p>
		</div>
	);
};

export default App;
