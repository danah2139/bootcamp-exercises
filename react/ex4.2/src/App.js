import './App.css';
import Card from './Card';

function App() {
	return (
		<div className="App">
			<Card
				src="https://source.unsplash.com/random"
				title="A Random Title"
				text="random text"
			/>
			<Card
				src="https://source.unsplash.com/random"
				title="title 2"
				text="random text2"
			/>
			<Card
				src="https://source.unsplash.com/random"
				title="A Random Title 3"
				text="random text 3"
			/>
		</div>
	);
}

export default App;
