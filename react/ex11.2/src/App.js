import { Component } from 'react';
import './App.css';

class App extends Component {
	state = { checkBox: true };
	// handleChangeChk=(e)=>{
	//   this.setState(checkBox:e.ta)
	// }
	render() {
		return (
			<div className="App">
				<form>
					<label>
						<input type="checkbox" onChange={this.handleChangeChk} />I read the
						term of the app
					</label>
					<label>
						<input type="checkbox" onChange={this.handleChangeChk} />I accept
						the term of the app
					</label>
					<label>
						<input
							defaultChecked={this.state.checkBox}
							type="checkbox"
							onChange={this.handleChangeChk}
						/>
						I want to get the weekly news letter
					</label>
					<label>
						<input
							defaultChecked={this.state.checkBox}
							type="checkbox"
							onChange={this.handleChangeChk}
						/>
						I want to get sales and offers
					</label>
				</form>
			</div>
		);
	}
}

export default App;
