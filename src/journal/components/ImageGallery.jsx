import React, { useEffect, useState } from 'react';
import {
  Button,
  ImageList,
  ImageListItem,
  Checkbox,
  FormControlLabel,
  CircularProgress,
  Alert,
} from '@mui/material';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import { useDispatch, useSelector } from 'react-redux';
import { startDeletingImages } from '../../store/journal/thunks';

export const ImageGallery = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { active: note } = useSelector((state) => state.journal);
  const { imageUrls: temporaryImages } = useSelector(
    (state) => state.temporaryImages
  );
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (note.imageUrls && temporaryImages) {
      setImages([...note.imageUrls, ...temporaryImages]);
    }
  }, [note.imageUrls, temporaryImages]);

  const handleSelectImage = (image) => {
    setSelectedImages((prev) =>
      prev.includes(image)
        ? prev.filter((img) => img !== image)
        : [...prev, image]
    );
  };

  const handleDeleteImages = async () => {
    setLoading(true);
    setError(null);
    try {
      await dispatch(startDeletingImages(selectedImages));
      setSelectedImages([]);
    } catch (err) {
      setError((err && err.message) || 'Error al eliminar las imágenes');
    } finally {
      setLoading(false);
    }
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
              src={image}
              srcSet={image}
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

      {loading && <CircularProgress />}
      {error && typeof error === 'string' && (
        <Alert severity="error">{error}</Alert>
      )}

      {selectedImages.length > 0 && (
        <Button
          variant="contained"
          startIcon={<DeleteForeverRoundedIcon />}
          onClick={handleDeleteImages}
          disabled={selectedImages.length === 0 || loading}
          sx={{
            backgroundColor: '#de0a26',
            '&:hover': {
              backgroundColor: '#c30010',
            },
            mt: 2,
          }}
        >
          {loading ? 'Eliminando...' : 'Eliminar'}
        </Button>
      )}
    </div>
  );
};
