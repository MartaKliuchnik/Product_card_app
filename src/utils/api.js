const FAKE_STORE_API = 'https://fakestoreapi.com/products';

async function fetchProducts() {
	const response = await fetch(FAKE_STORE_API);

	if (!response.ok) {
		const message = `An error has occured: ${response.status}`;
		throw new Error(message);
	}

	const productArray = await response.json();
	const products = productArray.filter(
		(product) =>
			product.category === 'jewelery' || product.category === 'electronics'
	);
	return products;
}

export default fetchProducts;
