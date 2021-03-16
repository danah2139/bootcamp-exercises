import { Component } from 'react';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = { display: false };
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		this.setState({ display: !this.state.display });
	}
	render() {
		return (
			<div className="App">
				<button onClick={this.handleClick}>show/hide</button>
				{this.state.display && <div className="yellow"></div>}
			</div>
		);
	}
}

export default App;
