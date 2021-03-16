import './App.css';
import Button from './Button';
const Card = (props) => {
	return (
		<div className="card">
			<img src={props.src} alt="" />
			<h2>{props.title}</h2>
			<p>{props.text}</p>
			<div>
				<Button text="approved"></Button>
				<Button text="denied"></Button>
			</div>
		</div>
	);
};
export default Card;
