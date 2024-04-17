import ProductCard from '../ProductCard/ProductCard';
import productsArray from '../../data/productsData';
import { useState } from 'react';
import { Grid } from '@mui/material';
import Filter from '../Filter/Filter';

export default function Products() {
	const [filteredProducts, setFilteredProducts] = useState(productsArray);

	function filterProducts(category) {
		setFilteredProducts(
			category
				? productsArray.filter((product) => product.category === category)
				: productsArray
		);
	}

	return (
		<>
			<Filter onFilter={filterProducts} />
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
