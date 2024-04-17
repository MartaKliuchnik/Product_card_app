import { Card, Typography, CardContent } from '@mui/material';
import styles from './ProductCard.module.css';
import { getShortenedTitle } from '../../utils/shortenedTitle';
import { useMemo } from 'react';

export default function ProductCard({ title, description, price, category }) {
	const shortenedTitle = useMemo(() => getShortenedTitle(title), [title]);

	return (
		<Card className={styles['product-card']}>
			<CardContent className={styles['card-content']}>
				<Typography variant='subtitle2' sx={{ pb: 1 }}>
					{shortenedTitle}
				</Typography>
				<Typography variant='body2' color='textSecondary'>
					Price: ${price}
				</Typography>
				<Typography variant='body2' color='textSecondary'>
					Category: {category}
				</Typography>
				<Typography variant='body2' color='textSecondary' sx={{ pt: 1 }}>
					{description}
				</Typography>
			</CardContent>
		</Card>
	);
}
