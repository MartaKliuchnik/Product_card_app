import React, { Component } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import productsArray from '../../data/productsData';
import { Grid } from '@mui/material';

export default class Products extends Component {
	render() {
		return (
			<Grid container justifyContent='center' spacing={2}>
				{productsArray.map((product) => (
					<Grid item key={product.id}>
						<ProductCard key={product.id} {...product} />
					</Grid>
				))}
			</Grid>
		);
	}
}
