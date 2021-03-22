import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
	return (
		<div className="header">
			<Link to="/">Home Page</Link>
			<Link to="/products">Products</Link>
		</div>
	);
};
export default Header;
