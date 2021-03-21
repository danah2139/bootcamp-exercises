import { Component } from 'react';
import './spinner.css';

class Spinner extends Component {
	render() {
		return (
			<div className="wrapper">
				<div className="spinner">
					<div></div>
					<div></div>
				</div>
			</div>
		);
	}
}

export default Spinner;
