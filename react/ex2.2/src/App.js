import './App.css';

function App() {
	const data = ['hello', 'world'];
	const number1 = 5;
	const number2 = 6;
	const string = 'I love React!';
	return (
		<div className="App">
			<label>{data[0] + ' ' + data[1]}</label>
			<label>{number1 + '+' + number2}</label>
			<label>The string’s length is {string.length}</label>
		</div>
	);
}

export default App;
