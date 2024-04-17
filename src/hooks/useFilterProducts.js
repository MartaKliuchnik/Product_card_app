import { useState } from 'react';
import productsArray from '../data/productsData';

const useFilteredProducts = () => {
	const [filteredProducts, setFilteredProducts] = useState(productsArray);

	const getFilterProducts = (category) => {
		setFilteredProducts(
			category
				? productsArray.filter((product) => product.category === category)
				: productsArray
		);
	};

	return [filteredProducts, getFilterProducts];
};

export default useFilteredProducts;
