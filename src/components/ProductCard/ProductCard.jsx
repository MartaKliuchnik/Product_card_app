import {
	Card,
	Typography,
	CardContent,
	IconButton,
	CardActions,
	Grid,
} from '@mui/material';
import styles from './ProductCard.module.css';
import { getShortenedTitle } from '../../utils/shortenedTitle';
import { useMemo } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function ProductCard({ product, isFavorite, onFavoriteClick }) {
	const { title, description, price, category } = product;
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
				<Grid container justifyContent='center'>
					<CardActions disableSpacing>
						<IconButton
							aria-label='add to favorites'
							onClick={() => onFavoriteClick(product.id)}
						>
							<FavoriteIcon sx={{ color: isFavorite ? 'red' : 'inherit' }} />
						</IconButton>
					</CardActions>
				</Grid>
				<Typography variant='body2' color='textSecondary' sx={{ pt: 1, pb: 2 }}>
					{description}
				</Typography>
			</CardContent>
		</Card>
	);
}
