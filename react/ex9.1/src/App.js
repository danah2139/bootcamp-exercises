import { Component } from 'react';
import Spinner from './components/Spinner';
import './App.css';

class App extends Component {
	state = { isSpinner: true };
	turnOff = () => {
		this.setState({ isSpinner: false });
	};
	componentDidMount() {
		setTimeout(this.turnOff, 3000);
	}
	render() {
		return <div> {this.state.isSpinner && <Spinner />}</div>;
	}
}

export default App;
