import { Component } from 'react';
import './box.css';

class Box extends Component {
	state = { color: 'red', counter: 0 };
	componentDidMount() {
		setInterval(() => {
			const colors = ['green', 'blue', 'purple', 'red', 'orange', 'yellow'];
			this.setState((prevState) => {
				return {
					color: colors[(prevState.counter + 1) % colors.length],
					counter: prevState.counter + 1,
				};
			});
		}, 500);
	}
	render() {
		const style = {
			background: this.state.color,
			witdh: this.props.size,
			height: this.props.size,
		};
		return (
			<div
				className={`${this.state.counter > 5 ? 'box round' : 'box'}`}
				style={style}
			></div>
		);
	}
}

export default Box;
