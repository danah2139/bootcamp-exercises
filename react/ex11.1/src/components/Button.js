import { Component } from 'react';
import './button.css';

class Button extends Component {
	render() {
		return (
			<button
				className={this.props.color}
				onClick={() => this.props.onButtonClick(this.props.color)}
			>
				<h2>{this.props.color}</h2>
			</button>
		);
	}
}
export default Button;
