import './App.css';
import React from 'react';
import Item from './components/Item';
const App = () => {
	const items = [
		{ name: 'CSS', completed: true },
		{ name: 'JavaScript', completed: true },
		{ name: 'Learn React', completed: false },
		{ name: 'Learn mongoDB', completed: false },
		{ name: 'Learn Node JS', completed: false },
	];
	const renderItems = () => {
		return items.map((item, index) => {
			return (
				<React.Fragment key={index}>
					<Item name={item.name} completed={item.completed} />
				</React.Fragment>
			);
		});
	};
	return <div className="App">{renderItems()}</div>;
};

export default App;
