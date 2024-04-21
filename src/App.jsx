import Toolbar from './components/Toolbar';
import ThemeToggler from './components/ThemeToggler';
import ThemeProvider from './components/ThemeProvider';
import InfoContainer from './components/InfoContainer';

function App() {
	console.log('re-render App');
	return (
		<>
			<ThemeProvider>
				<Toolbar />
				<ThemeToggler />
			</ThemeProvider>
			<InfoContainer />
		</>
	);
}

export default App;
