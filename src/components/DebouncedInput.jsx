export function DebouncedInput() {
	function debounce(mainFunction, delay) {
		let timeout = null;

		return (...args) => {
			if (timeout === null) {
				clearTimeout(timeout);
			}
			timeout = setTimeout(() => {
				mainFunction(...args);
			}, delay);
		};
	}

	const handleChange = (e) => {
		console.log(e.target.value);
	};

	const debouncedChange = debounce(handleChange, 500);

	return (
		<div>
			<p>This is a Debounced Input</p>
			<input onChange={debouncedChange} />
		</div>
	);
}

/* 
Debouncing ensures that a function is only executed after a certain period of time has elapsed since the last invocation of the function.
If the function is called multiple times within the debounce interval, it will only execute once, but it will reset the timer for the debounce interval.
Debouncing delays the execution of the function until there's a pause in the event triggers. If the events continue to occur frequently, the function will be delayed until there's a sufficient gap between them.
*/
