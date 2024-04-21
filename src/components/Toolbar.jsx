import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../Context';

export default function Toolbar() {
	const { theme } = useContext(ThemeContext);

	console.log('re-render Toolbar');

	return (
		<div
			style={{
				background: theme === 'light' ? '#fff' : '#333',
				padding: '1rem',
			}}
		>
			Toolbar
		</div>
	);
}
