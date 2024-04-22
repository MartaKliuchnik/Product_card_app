import React from 'react';

export default function ThrottledInput() {
	function throttle(mainFunction, delay) {
		let timerFlag = null;
		return function (...args) {
			if (timerFlag === null) {
				mainFunction(...args);
				timerFlag = setTimeout(() => {
					timerFlag = null;
				}, delay);
			}
		};
	}

	const handleChange = (e) => {
		console.log(e.target.value);
	};

	const throttledChange = throttle(handleChange, 500);

	return (
		<div>
			<p>This is a Throttled Input</p>
			<input onChange={throttledChange} />
		</div>
	);
}

/* 
Throttling ensures that a function is only executed at most once in a specified time period, regardless of how many times it's invoked during that period.
If the function is called multiple times within the throttle interval, it will only execute once, and subsequent calls during that interval are ignored.
Throttling guarantees that the function will be called periodically, based on the throttle interval, even if the event triggering it occurs more frequently.
*/
