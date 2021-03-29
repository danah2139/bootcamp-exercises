import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

import './item.css';
const Item = ({ name, completed }) => {
	const [isComplited, setIsComplited] = useState(completed);
	return (
		<div
			className={`item ${isComplited ? 'complited-item' : null}`}
			onClick={() => {
				isComplited ? setIsComplited(false) : setIsComplited(true);
			}}
		>
			<FontAwesomeIcon icon={isComplited ? faCheck : faTimes} size="2x" />
			<h3>{name}</h3>
		</div>
	);
};
export default Item;
