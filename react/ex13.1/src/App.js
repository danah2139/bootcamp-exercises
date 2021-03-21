import { Component } from 'react';
import './App.css';
import Data from './data';
import Name from './componants/Name';
import Card from './componants/Card';

class App extends Component {
	state = { nameArr: null, objArr: null, isDataFilterd: false };
	getAllNames = () => {
		return Data.map((el) => el.name);
	};
	getAllFilterObj = () => {
		const date = new Date();
		return Data.filter((el) => date.getYear(el.birthday) < 1990);
	};

	componentDidMount() {
		const nameArr = this.getAllNames();
		const objArr = this.getAllFilterObj();
		this.setState({ nameArr, objArr, isDataFilterd: true });
	}

	createCards = () => {
		//console.log(this.state.objArr);
		return this.state.objArr.map((card, i) => {
			return <Card card={card} />;
		});
	};
	render() {
		return (
			<div>
				{this.state.isDataFilterd && <Name names={this.state.nameArr} />}
				{this.state.isDataFilterd && this.createCards()}
			</div>
		);
	}
}

export default App;
