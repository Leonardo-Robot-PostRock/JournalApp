import { Button, ImageList, ImageListItem } from '@mui/material';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

export const ImageGallery = ({ images }) => {
  return (
    <ImageList sx={{ width: '100%', height: 'auto' }} cols={2} rowHeight="auto">
      {images.map((images) => (
        <ImageListItem key={images}>
          <img
            src={`${images}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${images}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt="Imagen de la nota"
            loading="lazy"
          />
          <Button
            sx={{
              position: 'absolute',
              top: '4px',
              color: 'red',
            }}
          >
            <DeleteForeverRoundedIcon fontSize="large" />
          </Button>
        </ImageListItem>
      ))}
    </ImageList>
  );
};
