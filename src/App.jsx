import { useState } from 'react';
import countries from './data/countries';
import useDebounce from './hooks/useDebounce';

function App() {
	const [data, setData] = useState(null);

	const loadData = async (event) => {
		const value = event.tartget.value;
		if (value === '') {
			setData(null);
			return;
		}

		const response = countries.filter((item) =>
			item.toLowerCase().startsWith(value.toLowerCase())
		);
		setData(response);
	};

	useDebounce(loadData, 500);

	return (
		<div className='App'>
			<input type='text' onChange={(e) => loadData(e)} />
			{data && data.length !== 0 && (
				<div className='results-contiainer'>
					{data.map((item) => (
						<div key={item.id} className='result-item'>
							<p> {item.city} </p>
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default App;
