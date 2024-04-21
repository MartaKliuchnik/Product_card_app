import { useState } from 'react';
import Toolbar from './components/Toolbar';
import ThemeToggler from './components/ThemeToggler';
import { ThemeContext } from './Context.js';

function App() {
	const [theme, setTheme] = useState('light');

	console.log('re-render App');
	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<Toolbar />
			<ThemeToggler />
		</ThemeContext.Provider>
	);
}

export default App;
