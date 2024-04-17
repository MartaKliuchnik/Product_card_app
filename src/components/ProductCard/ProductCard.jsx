import { Card, Typography, CardContent } from '@mui/material';
import styles from './ProductCard.module.css';

export default function ProductCard({ name, description, price, category }) {
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
