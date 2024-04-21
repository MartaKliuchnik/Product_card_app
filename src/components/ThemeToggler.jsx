import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../Context';

export default function ThemeToggler() {
	const { setTheme } = useContext(ThemeContext);

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
	};

	console.log('re-render ThemeToggler');

	return <button onClick={toggleTheme}>Toggle Theme</button>;
}
