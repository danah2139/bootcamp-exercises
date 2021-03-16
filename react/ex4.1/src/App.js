import './App.css';
import Button from './Button';

function App() {
	return (
		<div>
			<Button text="important" />
			<Button className="bold" text="Not Important" />
		</div>
	);
}

export default App;
