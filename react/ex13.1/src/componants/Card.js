import { Component } from 'react';

class Card extends Component {
	render() {
		console.log(this.props.card);
		return (
			<div className="card">
				<h2>{this.props.card.name}</h2>
				<div>Birthday:{this.props.card.birthday}</div>
				<h4>favorite Foods:</h4>
				<div>
					{this.props.card.favoriteFoods.meats.map((meat) => (
						<span> {meat} </span>
					))}
				</div>
				<div>
					{this.props.card.favoriteFoods.fish.map((fish) => (
						<span> {fish} </span>
					))}
				</div>
			</div>
		);
	}
}
export default Card;
