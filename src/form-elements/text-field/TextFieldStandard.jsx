import { TextField, useTheme } from '@mui/material';
import { styled } from '@mui/system';
import { memo } from 'react';

const CustomStandardTextField = styled(TextField)(({ color }) => {
  const theme = useTheme();

  return {
    '& .MuiInput-underline:before': {
      borderBottomColor: theme.palette.primary.border, // Border color before focus
    },
    '& .MuiInput-underline:hover:before': {
      borderBottomColor: theme.palette.primary.border2, // Border color on hover
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: color, // Border color when focused
    },
    '& .MuiInputLabel-root': {
      color: theme.palette.text.default, // Label color
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: theme.palette.text.white, // Label color when focused
    },
    '& .MuiInput-input': {
      color: theme.palette.text.white, // Text color
    },
    '& .MuiInput-input::placeholder': {
      color: theme.palette.text.placeholder, // Placeholder color
      opacity: 0.7, // Optional: adjust opacity
    },
  };
});

const TextFieldStandard = memo(({ color = 'primary', ...props }) => {
  return (
    <CustomStandardTextField
      variant="standard"
      {...props}
      color={color}
    />
  );
});

export default TextFieldStandard;
