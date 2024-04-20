import { useState } from 'react';
import countries from './data/countries.js';
import useDebounce from './hooks/useDebounce';

function App() {
	const [data, setData] = useState(null);

	const loadData = (event) => {
		const inputValue = event.target.value;
		console.log(inputValue);
		if (inputValue === '') {
			setData(null);
			return;
		}

		const response = countries.filter((item) =>
			item.toLowerCase().startsWith(inputValue.toLowerCase())
		);
		setData(response);
	};

	const loadDataDebounced = useDebounce(loadData, 500);

	return (
		<div className='App'>
			<input type='text' onChange={(e) => loadDataDebounced(e)} />
			{data && data.length !== 0 && (
				<div className='results-contiainer'>
					{data.map((item, i) => (
						<div key={i} className='result-item'>
							<p> {item} </p>
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default App;
