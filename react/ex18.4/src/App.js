import { useState } from 'react';

import './App.css';

const App = () => {
	const boxesArr = ['one', 'two', 'three', 'four', 'five'];
	const fullBoxArr = boxesArr.map((box) => ({ name: box, isCheck: false }));
	const [boxes, setBoxes] = useState(fullBoxArr);
	const handleChange = (boxName) => {
		setBoxes(
			boxes.map((box) => {
				if (boxName === box.name) {
					return { name: boxName, isCheck: !box.isCheck };
				}
				return box;
			})
		);
	};
	const renderList = () => {
		return boxes.map((box, index) => {
			return (
				<li>
					<input
						type="checkbox"
						checked={box.isCheck}
						onChange={() => handleChange(box.name)}
					/>
					{box.name}
				</li>
			);
		});
	};
	const handleDelete = () => {
		setBoxes(boxes.filter((box) => !box.isCheck));
	};
	const handleReset = () => {
		setBoxes(fullBoxArr);
	};
	return (
		<div className="App">
			<button onClick={handleReset}>Reset</button>
			<button onClick={handleDelete}>Delete</button>
			<ul>{renderList()}</ul>
		</div>
	);
};

export default App;
