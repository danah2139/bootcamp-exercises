import { Component } from 'react';

import data from './../../store';
import Card from '../card/Card';
class ProductsDetail extends Component {
	state = { product: null };
	componentDidMount() {
		const id = Number(this.props.match.params.id);
		const findProduct = data.find((product) => product.id === id);
		this.setState({ product: findProduct });
		console.log(findProduct);
	}
	render() {
		return (
			<div>{this.state.product && <Card product={this.state.product} />} </div>
		);
	}
}
export default ProductsDetail;
