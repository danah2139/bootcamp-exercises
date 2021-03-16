import { Component } from 'react';
import './App.css';

class App extends Component {
	constructor() {
		super();

		this.state = { counter: 0 };

		this.handleIncrement = this.handleIncrement.bind(this);
		this.handleDecrement = this.handleDecrement.bind(this);
	}

	handleIncrement() {
		if (this.state.counter < 10) {
			this.setState({ counter: this.state.counter + 1 });
		}
	}
	handleDecrement() {
		if (this.state.counter > -10) {
			this.setState({ counter: this.state.counter - 1 });
		}
	}

	render() {
		return (
			<div className="counter">
				<button onClick={this.handleIncrement}>increment</button>
				<button onClick={this.handleDecrement}>decrement</button>
				{this.state.counter > 0 && (
					<label className="green">{this.state.counter}</label>
				)}
				{this.state.counter < 0 && (
					<label className="red">{this.state.counter}</label>
				)}
				{this.state.counter === 0 && (
					<label className="black">{this.state.counter}</label>
				)}
			</div>
		);
	}
}

export default App;
