import { Component } from 'react';
import './box.css';

class Box extends Component {
	render() {
		const style = { witdh: this.props.size, height: this.props.size };
		return <div className="box" style={style}></div>;
	}
}

export default Box;
