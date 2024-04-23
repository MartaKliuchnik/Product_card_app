import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

const style = {
	border: '1px solid green',
	margin: 12,
	padding: 8,
};

function App() {
	const [dataSource, setDataSource] = useState(Array.from({ length: 30 }));
	const [hasMore, setHasMore] = useState(true);

	const fetchMoreData = () => {
		// API CALL
		if (dataSource.length >= 100) {
			setHasMore(false);
			return;
		}
		setTimeout(() => {
			setDataSource([...dataSource, ...Array.from({ length: 10 })]);
		}, 500);
	};

	return (
		<InfiniteScroll
			dataLength={dataSource.length}
			next={fetchMoreData}
			hasMore={hasMore}
			loader={<h4>Loading...</h4>}
			endMessage={
				<p style={{ textAlign: 'center' }}>
					<b>Yay! You have seen it all</b>
				</p>
			}
		>
			{dataSource.map((item, index) => {
				return (
					<div key={index} style={style}>
						This is a div #{index + 1} inside InfiniteScroll
					</div>
				);
			})}
		</InfiniteScroll>
	);
}

export default App;
