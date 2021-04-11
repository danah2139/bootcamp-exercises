import './App.css';

import { useState, useEffect, useRef } from 'react';

const App = () => {
	const [IsClickEdit, setIsClickEdit] = useState(false);
	const ref = useRef();
	useEffect(() => {
		if (ref.current) {
			ref.current.focus();
		}
	}, [IsClickEdit]);

	return (
		<div className="App">
			<button
				onClick={() => {
					setIsClickEdit(!IsClickEdit);
				}}
			>
				{IsClickEdit ? 'edit' : 'save'}
			</button>
			{IsClickEdit && <input ref={ref} />}
		</div>
	);
};

export default App;
