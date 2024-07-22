import React, { useState } from 'react';
import {
  Button,
  ImageList,
  ImageListItem,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import { useDispatch } from 'react-redux';
import { startDeletingImage } from '../../store/journal/thunks';

export const ImageGallery = ({ images }) => {
  const [selectedImages, setSelectedImages] = useState([]);
  const dispatch = useDispatch();

  console.log(selectedImages);

  const handleSelectImage = (image) => {
    setSelectedImages((prev) =>
      prev.includes(image)
        ? prev.filter((img) => img !== image)
        : [...prev, image]
    );
  };

  const handleDeleteImages = () => {
    selectedImages.forEach((imageUrls) => {
      dispatch(startDeletingImage(imageUrls));
    });
    setSelectedImages([]);
  };

  return (
    <div>
      <ImageList
        sx={{ width: '100%', height: 'auto' }}
        cols={2}
        rowHeight="auto"
      >
        {images.map((image) => (
          <ImageListItem key={image}>
            <img
              src={`${image}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt="Imagen de la nota"
              loading="lazy"
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="large"
                  checked={selectedImages.includes(image)}
                  onChange={() => handleSelectImage(image)}
                  sx={{
                    color: 'white',
                    '&.Mui-checked': {
                      color: '#d1001f',
                    },
                  }}
                />
              }
              sx={{
                position: 'absolute',
                color: 'white',
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>

      {selectedImages.length > 0 && (
        <Button
          variant="contained"
          startIcon={<DeleteForeverRoundedIcon />}
          onClick={handleDeleteImages}
          disabled={selectedImages.length === 0}
          sx={{
            backgroundColor: '#de0a26',
            '&:hover': {
              backgroundColor: '#c30010',
            },
          }}
        >
          Eliminar imágenes seleccionadas
        </Button>
      )}
    </div>
  );
};
