import { useEffect, useState } from 'react';
import fetchProducts from '../utils/api';

const useFilteredProducts = () => {
	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const fetchedProducts = await fetchProducts();
				setProducts(fetchedProducts);
				setFilteredProducts(fetchedProducts);
			} catch (error) {
				console.error('Error fetching products:', error);
			}
		};
		fetchData();
	}, []);

	const getFilterProducts = (category) => {
		setFilteredProducts(
			category
				? products.filter((product) => product.category === category)
				: filteredProducts
		);
	};

	return [filteredProducts, getFilterProducts];
};

export default useFilteredProducts;
