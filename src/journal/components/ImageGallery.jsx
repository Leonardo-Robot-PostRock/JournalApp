import React, { useEffect, useState } from 'react';
import {
  Button,
  ImageList,
  ImageListItem,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import { useDispatch, useSelector } from 'react-redux';
import { startDeletingImages } from '../../store/journal/thunks';

export const ImageGallery = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const dispatch = useDispatch();
  const { active: note } = useSelector((state) => state.journal);
  const [images, setImages] = useState(note.imageUrls);

  useEffect(() => {
    setImages(note.imageUrls);
  }, [note.imageUrls]);

  const handleSelectImage = (image) => {
    setSelectedImages((prev) =>
      prev.includes(image)
        ? prev.filter((img) => img !== image)
        : [...prev, image]
    );
  };

  const handleDeleteImages = () => {
    dispatch(startDeletingImages(selectedImages));
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
          <ImageListItem
            key={image}
            onClick={() => handleSelectImage(image)}
            sx={{ position: 'relative', cursor: 'pointer' }}
          >
            <img
              src={`${image}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt="Imagen de la nota"
              loading="lazy"
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="medium"
                  checked={selectedImages.includes(image)}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSelectImage(image);
                  }}
                  sx={{
                    color: 'transparent',
                    '&.Mui-checked': {
                      color: '#d1001f',
                    },
                    '&:hover': {
                      backgroundColor: 'transparent',
                    },
                  }}
                />
              }
              sx={{
                position: 'absolute',
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
          Eliminar
        </Button>
      )}
    </div>
  );
};
