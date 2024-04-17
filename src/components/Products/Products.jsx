import ProductCard from '../ProductCard/ProductCard';
import { Grid } from '@mui/material';
import Filter from '../Filter/Filter';
import useFilterProducts from '../../hooks/useFilterProducts';

export default function Products() {
	const [filteredProducts, getFilterProducts] = useFilterProducts();

	return (
		<>
			<Filter onFilter={getFilterProducts} />
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
