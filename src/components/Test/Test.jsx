import { Box, InputLabel, TextField } from '@mui/material';
import { styled } from '@mui/system';
import { useState } from 'react';

const StyledBox = styled(Box)({
  position: 'relative',
  display: 'inline-block',
  margin: '30px 100px',
  width: '350px', // Fixed width for the container
});

const CustomTextField = styled(TextField)(({ theme, isFocused }) => ({
  display: 'inline-block', // Set to inline-block for alignment
  position: 'absolute',
  right: 0, // Fixed to the right side
  width: isFocused ? '100%' : '280px', // Expand to full width on focus
  height: '42px', // Ensure consistent height
  // padding: '0 15px',
  fontFamily: '"Open Sans", sans-serif',
  fontWeight: 400,
  backgroundColor: 'var(--light-color)',
  borderRadius: '3px',
  outline: 0,
  transition: 'width 0.3s ease-in-out',
  '& .MuiOutlinedInput-root': {
    height: '100%', // Match height with the text field container
    color: 'var(--text-color)',
    '& fieldset': {
      border: 'none',
      borderColor: isFocused ? theme.palette.primary.main : '#ccc',
      transition: 'border-color 0.3s ease-in-out',
    },
    '&:hover fieldset': {
      border: 'none',
    },
    '&.Mui-focused fieldset': {
      border: 'none',
    },
  },
  '& .MuiInputBase-input::placeholder': {
    color: isFocused ? '#aaa' : 'var(--light-color)',
    fontWeight: 300,
  },
  '& .MuiInputBase-input': {
    height: '100%', // Ensure consistent height
    boxSizing: 'border-box',
    '&.Mui-focused': {
      boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.2)',
    },
  },
}));

const CustomInputLabel = styled(InputLabel)(({ isFocused }) => ({
  display: 'flex', // Set to inline-block for alignment
  justifyContent: 'flex-start',
  position: 'absolute',
  left: isFocused ? 'calc(100% - 410px)' : '7px',
  height: '42px', // Match the height of the input field
  lineHeight: '42px', // Vertically center the text
  padding: '0 10px',
  color: 'var(--white-color)',
  backgroundColor: 'var(--yellow-color)',
  transition: 'left 0.3s ease-in-out, top 0.3s ease-in-out, font-size 0.3s ease-in-out',
  borderTopLeftRadius: '3px',
  borderBottomLeftRadius: '3px',
  pointerEvents: 'none',
  fontSize: '16px',
}));

export default function Test() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <StyledBox>
      <CustomTextField
        id="name"
        placeholder="Your best name"
        variant="outlined"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        InputProps={{
          disableUnderline: true, // Disable the default underline of MUI
        }}
        isFocused={isFocused}
      />
      <CustomInputLabel htmlFor="name" isFocused={isFocused}>Name</CustomInputLabel>
    </StyledBox>
  );
}

