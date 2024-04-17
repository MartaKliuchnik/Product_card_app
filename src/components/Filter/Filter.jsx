import { Stack, Button } from '@mui/material';
import React, { Component } from 'react';

export default class Filter extends Component {
	constructor(props) {
		super(props);
		this.handlerFilter = this.handlerFilter.bind(this);
	}

	handlerFilter(category) {
		this.props.onFilter(category);
	}

	render() {
		return (
			<Stack
				spacing={2}
				mt={2}
				direction='row'
				justifyContent='center'
				alignItems='center'
			>
				<Button
					onClick={() => this.handlerFilter('Electronics')}
					variant='contained'
				>
					Show Electronics
				</Button>
				<Button
					onClick={() => this.handlerFilter('Sports')}
					variant='contained'
				>
					Show Sports
				</Button>
				<Button onClick={() => this.handlerFilter(null)} variant='contained'>
					Reset Filters
				</Button>
			</Stack>
		);
	}
}
