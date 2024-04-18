import { useState, useCallback } from 'react';

const useFavoriteProducts = () => {
	const [favoriteProducts, setFavoriteProducts] = useState([]);

	const handleFavoriteClick = useCallback((productId) => {
		setFavoriteProducts((prev) => {
			if (prev.includes(productId)) {
				return prev.filter((id) => id !== productId);
			} else {
				return [...prev, productId];
			}
		});
	}, []);

	return [favoriteProducts, handleFavoriteClick];
};

export default useFavoriteProducts;
