import { Component } from 'react';
import FormReview from './FormReview';

class Form extends Component {
	state = { click: false, firstName: '', lastName: '', age: '', freeText: '' };
	onFormSubmit = (event) => {
		event.preventDefault();
		this.setState({ click: true });
	};
	handleInputChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	handleOptions = () => {
		const ageArr = [
			'0-10',
			'11-20',
			'21-30',
			'31-40',
			'41-50',
			'51-60',
			'61-80',
			'81-110',
		];
		return ageArr.map((age) => <option value={age}>{age}</option>);
	};

	createProps = () => {
		return this.state;
	};

	handleReviewButton = (status) => {
		this.setState({ click: status });
	};
	render() {
		return (
			<form onSubmit={this.onFormSubmit}>
				<div className="field">
					<label>First Name</label>
					<input
						name="firstName"
						type="text"
						onChange={this.handleInputChange}
					></input>
				</div>
				<div className="field">
					<label>Last Name</label>
					<input
						name="lastName"
						type="text"
						onChange={this.handleInputChange}
					></input>
				</div>
				<select name="age" onChange={this.handleInputChange}>
					{this.handleOptions()}
				</select>
				<textarea name="freeText" onChange={this.handleInputChange}></textarea>
				<input type="submit" />
				{this.state.click && (
					<FormReview
						handleReviewButton={this.handleReviewButton}
						{...this.createProps()}
					/>
				)}
			</form>
		);
	}
}
export default Form;
