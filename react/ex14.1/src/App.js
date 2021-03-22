import './App.css';
import React, { Component } from 'react';

class App extends Component {
	constructor() {
		super();
		this.inputRef = React.createRef();
	}

	componentDidMount() {
		this.inputRef.current.focous();
	}
	render() {
		return (
			<div className="App">
				<input type="text" ref={this.inputRef} />
			</div>
		);
	}
}

export default App;
