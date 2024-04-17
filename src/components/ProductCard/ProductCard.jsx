import React, { Component } from 'react';
import styles from './ProductCard.module.css';
import { Card, Typography, CardContent } from '@mui/material';

export default class ProductCard extends Component {
	render() {
		const { name, description, price, category } = this.props;

		return (
			<Card className={styles['product-card']}>
				<CardContent>
					<Typography variant='h6'>{name}</Typography>
					<Typography variant='body2' color='textSecondary'>
						{description}
					</Typography>
					<Typography variant='body2' color='textSecondary'>
						Price: ${price}
					</Typography>
					<Typography variant='body2' color='textSecondary'>
						Category: {category}
					</Typography>
				</CardContent>
			</Card>
		);
	}
}
