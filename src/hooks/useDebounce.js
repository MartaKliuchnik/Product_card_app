export default function useDebounce(func, delay) {
	let timeout;

	return (...arg) => {
		if (timeout) clearTimeout(timeout);
		timeout = setTimeout(() => {
			func(...arg);
		}, delay);
	};
}
