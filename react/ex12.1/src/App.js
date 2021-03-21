import { Component } from 'react';
import './App.css';
import ChuckApi from '../src/api/categories';
class App extends Component {
	state = { joke: '', errorMassage: '', categories: null };
	componentDidMount() {
		this.getCategories();
	}

	getCategories = async () => {
		const categories = (await ChuckApi('categories')).data;
		this.setState({ categories });
	};

	handleCatagory = async (value) => {
		const joke = (await ChuckApi.get('random', { params: { category: value } }))
			.data.value;
		this.setState({ joke });
	};

	render() {
		const renderCategories = () => {
			console.log(this.state.categories);
			return this.state.categories.map((el, i) => {
				return (
					<button
						key={i}
						onClick={() => {
							this.handleCatagory(el);
						}}
					>
						{el}
					</button>
				);
			});
		};
		return (
			<div>
				<h1>Chuck norris jokes</h1>
				{this.state.categories && renderCategories()}
				{this.state.errorMassage}
				<p>{this.state.joke}</p>
			</div>
		);
	}
}

export default App;
