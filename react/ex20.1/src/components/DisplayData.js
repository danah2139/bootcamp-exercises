import { render } from '@testing-library/react';
import axios from 'axios';
import { useState, useEffect } from 'react';
const DisplayData = ({ isClick }) => {
	const [results, setResults] = useState('');
	const cancelTokenSource = axios.CancelToken.source();
	//console.log(cancelTokenSource);
	useEffect(() => {
		(async () => {
			try {
				const { data } = await axios.get(
					'https://restcountries.eu/rest/v2/all',
					{
						cancelToken: cancelTokenSource.token,
					}
				);
				setResults(
					data.map((country) => ({
						id: country.alpha3Code,
						name: country.name,
					}))
				);
			} catch (e) {
				console.log(e.message);
			}
		})();
		return () => {
			// Cancel request
			cancelTokenSource.cancel('Operation canceled by the user.');
		};
	}, [results]);
	const renderResults = () => {
		return results.map((country) => (
			<div key={country.id}>{country.name} </div>
		));
	};
	return <div>{results && renderResults()}</div>;
};
export default DisplayData;
