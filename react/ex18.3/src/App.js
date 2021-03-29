import './App.css';
import React, { useState } from 'react';
const App = () => {
	const [seconds, setSeconds] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [hours, setHours] = useState(0);
	const [changedField, setChangedField] = useState('');
	const handleSeconds = (e) => {
		if (Number(e.target.value) !== 0) {
			setSeconds(Number(e.target.value));
			setMinutes(Number(e.target.value) / 60);
			setHours(Number(e.target.value) / 60 / 60);
		}
	};
	const handleMinutes = (e) => {
		if (Number(e.target.value) !== 0) {
			setMinutes(Number(e.target.value));
			setSeconds(Number(e.target.value) * 60);
			setHours(Number(e.target.value) / 60);
		}
	};
	const handleHours = (e) => {
		if (Number(e.target.value) !== 0) {
			setHours(Number(e.target.value));
			setSeconds(Number(e.target.value) * 60 * 60);
			setMinutes(Number(e.target.value) * 60);
		}
	};

	return (
		<div className="App">
			<div>
				Seconds:
				<input
					type="number"
					value={seconds}
					onChange={(e) => handleSeconds(e)}
				/>
			</div>
			<div>
				Minutes:
				<input
					type="number"
					value={minutes}
					onChange={(e) => handleMinutes(e)}
				/>
			</div>
			<div>
				Hours:
				<input type="number" value={hours} onChange={(e) => handleHours(e)} />
			</div>
		</div>
	);
};

export default App;
