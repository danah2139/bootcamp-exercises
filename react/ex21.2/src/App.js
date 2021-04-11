import './App.css';
import { useRef, useState, useEffect } from 'react';

function App() {
	const [isPlayClick, setIsPlayClick] = useState(false);
	const [isPauseClick, setIsPauseClick] = useState(false);
	useEffect(() => {
		console.log(isPlayClick, isPauseClick);
		if (isPlayClick) {
			ref.current.play();
		}
		if (isPauseClick) {
			ref.current.pause();
		}
	}, [isPlayClick, isPauseClick]);

	const ref = useRef();
	return (
		<div className="App">
			<div>
				<video ref={ref}>
					<source
						src="http://media.w3.org/2010/05/sintel/trailer.mp4"
						type="video/mp4"
					/>
				</video>
			</div>

			<button
				onClick={() => {
					setIsPlayClick(true);
					setIsPauseClick(false);
				}}
			>
				play
			</button>
			<button
				onClick={() => {
					setIsPauseClick(true);
					setIsPlayClick(false);
				}}
			>
				pause
			</button>
		</div>
	);
}

export default App;
