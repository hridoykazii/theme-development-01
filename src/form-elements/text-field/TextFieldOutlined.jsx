import { TextField, useTheme } from '@mui/material';
import { styled } from '@mui/system';
import { memo } from 'react';

const CustomTextField = styled(TextField)(({ color }) => {
    const theme = useTheme();

  return {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: theme.palette.primary.border
      },
      '&:hover fieldset': {
        borderColor: theme.palette.primary.border2
      },
      '&.Mui-focused fieldset': {
        borderColor: color
      },
    },
    '& .MuiInputLabel-root': {
      color: theme.palette.text.default,
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: theme.palette.text.white 
    },
    '& .MuiOutlinedInput-input': {
      color: theme.palette.text.white, // Text color
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'blue', // Outline color
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'green', // Outline color when focused
    },
    '& .MuiOutlinedInput-input::placeholder': {
      color: theme.palette.text.placeholder, // Placeholder color
      opacity: 0.7, // Optional: adjust opacity
    },
  };
});

const TextFieldOutlined = memo(({ color = 'primary', ...props }) => {
  return (
    <CustomTextField
      variant="outlined"
      {...props}
      color={color}
    />
  );
});

export default TextFieldOutlined;
