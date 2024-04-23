import { useState, Suspense, lazy } from 'react';
import Loading from './Loading';

const MarkDownPreview = lazy(() => delayForDemo(import('./MarkDownPreview')));

function App() {
	const [showPreview, setShowPreview] = useState(false);
	const [markdown, setMarkdown] = useState('Hello, **world**!');

	return (
		<>
			<textarea
				value={markdown}
				onChange={(e) => setMarkdown(e.target.value)}
			/>
			<label>
				<input
					type='checkbox'
					checked={showPreview}
					onChange={(e) => setShowPreview(e.target.checked)}
				/>
				Show preview
			</label>
			<hr />
			{showPreview && (
				<Suspense fallback={<Loading />}>
					<h2>Preview</h2>
					<MarkDownPreview markdown={markdown} />
				</Suspense>
			)}
		</>
	);
}

async function delayForDemo(promise) {
	return await new Promise((resolve) => {
		setTimeout(resolve, 2000);
	}).then(() => promise);
}

export default App;
