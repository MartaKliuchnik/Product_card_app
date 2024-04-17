import { Stack, Button } from '@mui/material';

export default function Filter({ onFilter }) {
	return (
		<Stack
			spacing={2}
			mt={2}
			direction='row'
			justifyContent='center'
			alignItems='center'
		>
			<Button onClick={() => onFilter('electronics')} variant='contained'>
				Show Electronics
			</Button>
			<Button onClick={() => onFilter('jewelery')} variant='contained'>
				Show Jewelery
			</Button>
			<Button onClick={() => onFilter(null)} variant='contained'>
				Reset Filters
			</Button>
		</Stack>
	);
}
