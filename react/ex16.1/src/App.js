import { BrowserRouter, Route } from 'react-router-dom';

import HomePage from './components/homePage/HomePage';
import Products from './components/products/Products';
import Header from './components/header/Header';
import './App.css';
import ProductDetail from './components/productDetail/ProductDetail';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<div>
					<Header />
					<Route path="/" exact component={HomePage} />
					<Route path="/products" exact component={Products} />
					<Route path="/products/:id" exact component={ProductDetail} />
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
