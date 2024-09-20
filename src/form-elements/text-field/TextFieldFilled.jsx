import { TextField, useTheme } from '@mui/material';
import { styled } from '@mui/system';
import { memo } from 'react';

const CustomFilledTextField = styled(TextField)(({ color }) => {
  const theme = useTheme();

  return {
    '& .MuiFilledInput-root': {
      backgroundColor: theme.palette.background.main, // Background color for filled variant
      '&:hover': {
        backgroundColor: theme.palette.action.hover, // Background color on hover
      },
      '&.Mui-focused': {
        backgroundColor: theme.palette.background.inputBg, // Background color when focused
      },
      '&:before': {
        borderColor: theme.palette.primary.border, // Border color before focus
      },
      '&:hover:before': {
        borderColor: theme.palette.primary.border2, // Border color on hover
      },
      '&.Mui-focused:before': {
        borderColor: color, // Border color when focused
      },
    },
    '& .MuiInputLabel-root': {
      color: theme.palette.text.default, // Label color
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: theme.palette.text.white, // Label color when focused
    },
    '& .MuiFilledInput-input': {
      color: theme.palette.text.white, // Text color
    },
    '& .MuiFilledInput-input::placeholder': {
      color: theme.palette.text.placeholder, // Placeholder color
      opacity: 0.7, // Optional: adjust opacity
    },
  };
});

const TextFieldFilled = memo(({ color = 'primary', ...props }) => {
  return (
    <CustomFilledTextField
      variant="filled"
      {...props}
      color={color}
    />
  );
});

export default TextFieldFilled;
