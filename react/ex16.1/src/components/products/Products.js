import data from '../../store';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './products.css';
class Products extends Component {
	state = { data: null };
	componentDidMount() {
		this.setState({ data });
	}
	renderCategories = () => {
		return data.map((product) => {
			return (
				<Link key={product.id} to={`/products/${product.id}`}>
					{product.title}
				</Link>
			);
		});
	};

	render() {
		return (
			<div className="container-categories">{this.renderCategories()}</div>
		);
	}
}
export default Products;
