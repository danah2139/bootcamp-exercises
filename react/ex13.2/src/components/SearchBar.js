import { Component } from 'react';

class SearchBar extends Component {
	render() {
		return (
			<input
				type="text"
				onChange={(e) => this.props.filterAvatars(e)}
				placeholder="Enter a search term to filter"
			/>
		);
	}
}
export default SearchBar;
