import React, { Component } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import productsArray from '../../data/productsData';
import { Grid } from '@mui/material';
import Filter from '../Filter/Filter';

export default class Products extends Component {
	constructor(props) {
		super(props);
		this.state = {
			filteredProducts: productsArray,
		};
		this.filterProducts = this.filterProducts.bind(this);
	}

	filterProducts(category) {
		const filtered = category
			? productsArray.filter((product) => product.category === category)
			: productsArray;
		this.setState({ filteredProducts: filtered });
	}

	render() {
		const { filteredProducts } = this.state;
		return (
			<>
				<Filter onFilter={this.filterProducts} />
				<Grid container justifyContent='center' spacing={6} sx={{ mt: 2 }}>
					{filteredProducts.map((product) => (
						<Grid item key={product.id}>
							<ProductCard key={product.id} {...product} />
						</Grid>
					))}
				</Grid>
			</>
		);
	}
}
