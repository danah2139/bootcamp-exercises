import './App.css';
import DisplayData from './components/DisplayData';

import { useState, useEffect } from 'react';

const App = () => {
	const [isClick, setIsClick] = useState(false);
	const handleClick = () => {
		setIsClick(!isClick);
	};
	return (
		<div className="App">
			<button onClick={handleClick}>Display Data</button>
			{isClick && <DisplayData isClick={isClick} />}
		</div>
	);
};

export default App;
