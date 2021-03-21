import { Component } from 'react';

class Name extends Component {
	renderNames = () => {
		return this.props.names.map((name) => {
			return <div>{name}</div>;
		});
	};
	render() {
		return <div className="names">{this.renderNames()}</div>;
	}
}
export default Name;
