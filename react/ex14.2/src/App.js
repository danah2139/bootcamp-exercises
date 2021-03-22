import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
	valueRef = React.createRef();
	copy = () => {
		this.valueRef.current.select();
		document.execCommand('copy');
	};
	render() {
		return (
			<div className="App">
				<h2>what is the meaning of life?</h2>
				<textarea cols="30" rows="10" ref={this.valueRef} />
				<button onClick={this.copy}>copy</button>
			</div>
		);
	}
}

export default App;
