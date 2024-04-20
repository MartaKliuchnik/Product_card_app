export default function useDebounce(func, delay) {
	let timeout;

	return (...args) => {
		console.log(args);
		if (timeout) clearTimeout(timeout);
		timeout = setTimeout(() => {
			func(...args);
		}, delay);
	};
}
