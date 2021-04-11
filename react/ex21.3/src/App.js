import './App.css';

import { useState, useEffect, useRef } from 'react';
const App = () => {
	const [images, setImages] = useState([]);
	let [hoveredImage, setHoveredImage] = useState(0);

	useEffect(() => {
		setImages(
			[1, 2].map((image) => ({
				src: require(`./img/pic${image}-${
					image !== hoveredImage ? 'black-n-white' : 'color'
				}.jpg`).default,
				id: image,
			}))
		);
	}, [hoveredImage]);

	return (
		<div className="App">
			{images.map((image) => (
				<img
					src={image.src}
					alt=""
					onMouseEnter={() => {
						setHoveredImage(image.id);
					}}
					onMouseLeave={() => setHoveredImage(0)}
					width="200"
					height="200"
				/>
			))}
		</div>
	);
};

export default App;
