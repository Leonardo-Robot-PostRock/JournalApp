import { ImageList, ImageListItem } from '@mui/material';

export const ImageGallery = ({ images }) => {
	return (
		<ImageList sx={{ width: '100%', height: 'auto' }} cols={4} rowHeight='auto'>
			{images.map((images) => (
				<ImageListItem key={images}>
					<img
						src={`${images}?w=164&h=164&fit=crop&auto=format`}
						srcSet={`${images}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
						alt='Imagen de la nota'
						loading='lazy'
					/>
				</ImageListItem>
			))}
		</ImageList>
	);
};
