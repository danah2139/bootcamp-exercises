import { Component } from 'react';

class FormReview extends Component {
	// constructor(props){
	//     super(props)
	// }
	setContent = () => {
		console.log(this.props);
		let attribArr = [];

		for (const prop in this.props) {
			if (prop !== 'click') {
				attribArr.push(<div>{this.props[prop]}</div>);
			}
		}
		return attribArr;
	};

	render() {
		return (
			<div className="form-review">
				{this.setContent()}
				<button onClick={() => this.props.handleReviewButton(false)}>
					Edit
				</button>
				<button onClick={() => this.props.handleReviewButton(true)}>
					Send
				</button>
			</div>
		);
	}
}
export default FormReview;
