import { useTheme } from '@emotion/react';
import AddPhoto from '@mui/icons-material/AddPhotoAlternate';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Button, IconButton, Typography } from '@mui/material';
import { useRef, useState } from 'react';

const ImagePreviewer = () => {
  const theme = useTheme();
  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = (event) => {
    event.stopPropagation();
    setSelectedImage(null);
    setPreview(null);
  };

  const handleClickUploadButton = (event) => {
    event.stopPropagation();
    fileInputRef.current.click();
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
      <Box
        sx={{
          width: '100%',
          height: 200,
          cursor: 'pointer',
          border: `2px solid ${theme.palette.primary.border}`,
          borderRadius: '10px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: `${theme.palette.background.inputBg}`,
        }}
        onClick={() => fileInputRef.current.click()}
      >
        <input
          accept="image/*"
          style={{ display: 'none' }}
          id="contained-button-file"
          type="file"
          onChange={handleImageChange}
          ref={fileInputRef}
        />
        {!preview ? (
          <Button
            variant="text"
            component="span"
            onClick={handleClickUploadButton} // Added onClick handler to prevent double opening
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 1,
              '&:hover': {
                backgroundColor: 'transparent',
                boxShadow: 'none', 
              },
            }}
          >
            <AddPhoto sx={{ fontSize: 50, color: 'var(--icon-color)' }} />
            <Typography variant="body2" sx={{color: 'var(--placeholder-color)'}}>Upload Image</Typography>
          </Button>
        ) : (
          <Box sx={{ position: 'relative', width: '100%', height: 200 }}>
            <img src={preview} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <IconButton
              color="secondary"
              onClick={handleRemoveImage}
              sx={{
                position: 'absolute',
                top: 8,
                right: 8,
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                '&:hover': {
                  color: 'red',
                  backgroundColor: 'rgba(255, 255, 255, 1)',
                },
              }}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        )}
      </Box>
      {selectedImage && (
        <Typography variant="body2" color="var(--color-white)">
          {selectedImage.name}
        </Typography>
      )}
    </Box>
  );
};

export default ImagePreviewer;
