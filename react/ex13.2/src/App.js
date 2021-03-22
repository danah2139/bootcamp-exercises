import './App.css';
import { Component } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import Avatar from './components/Avatar';

class App extends Component {
	state = {
		avatars: null,
	};
	async componentDidMount() {
		const response = await axios.get('https://randomuser.me/api/?results=10');
		this.setState({
			avatars: response.data.results.map((user) => {
				return {
					id: user.login.uuid,
					name: user.name.first + user.name.last,
					image: user.picture.large,
					shouldShow: true,
				};
			}),
		});
	}

	drawAvatars = (avatars) => {
		return avatars.map((avatar) => {
			return <Avatar avatar={avatar} />;
		});
	};

	filterAvatars = (e) => {
		const searchTerm = e.target.value.toLowerCase();
		this.setState((prevState) => {
			return {
				avatars: prevState.avatars.map((avatar) => {
					if (avatar.name.toLowerCase().includes(searchTerm)) {
						return {
							name: avatar.name,
							image: avatar.image,
							shouldShow: true,
						};
					} else {
						return {
							name: avatar.name,
							image: avatar.image,
							shouldShow: false,
						};
					}
				}),
			};
		});
	};
	render() {
		return (
			<div>
				<SearchBar filterAvatars={this.filterAvatars} />
				{this.state.avatars &&
					this.drawAvatars(
						this.state.avatars.filter((avatar) => avatar.shouldShow)
					)}
			</div>
		);
	}
}

export default App;
