import { Component } from 'react';
import Button from './components/Button';
import './App.css';

class App extends Component {
	state = { currentColor: '' };
	createButtons = () => {
		const colors = ['blue', 'red', 'yellow'];
		return colors.map((color) => (
			<Button color={color} onButtonClick={this.onButtonClick} />
		));
	};

	onButtonClick = (color) => {
		this.setState({ currentColor: color });
	};
	render() {
		return (
			<div>
				<div>{this.createButtons()}</div>
				<h2>The color selected is:{this.state.currentColor}</h2>
			</div>
		);
	}
}

export default App;
