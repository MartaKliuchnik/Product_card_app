import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../Context';

export default function ThemeToggler() {
	const { toggleTheme } = useContext(ThemeContext);

	console.log('re-render ThemeToggler');

	return <button onClick={toggleTheme}>Toggle Theme</button>;
}
