import ProductCard from '../ProductCard/ProductCard';
import { Grid, Typography } from '@mui/material';
import Filter from '../Filter/Filter';
import useFilterProducts from '../../hooks/useFilterProducts';
import useFavoriteProducts from '../../hooks/useFavoriteProducts';
import { useCallback, useEffect, useState } from 'react';

export default function Products() {
	const [filteredProducts, getFilterProducts] = useFilterProducts([]);
	const [favoriteProducts, handleFavoriteClick] = useFavoriteProducts([]);
	const [productCount, setProductCount] = useState(0);

	const getProductCount = useCallback((product) => {
		return product.length;
	}, []);

	useEffect(() => {
		setProductCount(getProductCount(filteredProducts));
	}, [filteredProducts, getProductCount]);

	return (
		<>
			<Typography variant='h4' sx={{ margin: '1rem', textAlign: 'center' }}>
				Total products in the store: {productCount}
			</Typography>
			<Filter onFilter={getFilterProducts} />

			<Grid container justifyContent='center' spacing={4} sx={{ mt: 2 }}>
				{filteredProducts.map((product) => (
					<Grid item key={product.id}>
						<ProductCard
							key={product.id}
							product={product}
							isFavorite={favoriteProducts.includes(product.id)}
							onFavoriteClick={handleFavoriteClick}
						/>
					</Grid>
				))}
			</Grid>
		</>
	);
}
