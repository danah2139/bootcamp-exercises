import { Link } from 'react-router-dom';
import './card.css';
const Card = (props) => {
	console.log(props);
	return (
		<div className="card">
			<h2>{props.product.title}</h2>
			<p>{props.product.price}</p>
			<img src={props.product.imageUrl} alt={props.product.title} />
			<Link to="/products" className="btn">
				Back
			</Link>
		</div>
	);
};
export default Card;
