/* eslint-disable no-unused-vars */
import { Box, InputLabel, TextField } from '@mui/material';
import { styled } from '@mui/system';
import React, { useRef, useState } from 'react';

const StyledBox = styled(Box)({
  position: 'relative',
  display: 'inline-block',
  margin: '0px 100px',
  marginTop: '20px',
});

const CustomTextField = styled(({ isFocused, bgColor, color, ...other }) => (
  <TextField {...other} />
))(({ theme, isFocused, bgColor, color }) => ({
  display: 'inline-block',
  width: '350px',
  height: '45px',
  padding: '0',
  paddingLeft: '15px',
  fontFamily: '"Open Sans", sans-serif',
  fontWeight: 400,
  backgroundColor: bgColor || theme.palette.background.inputBg,
  border: 0,
  borderRadius: '3px',
  outline: 0,
  textIndent: isFocused ? '0' : '75px',
  transition: 'all .3s ease-in-out',
  '& .MuiOutlinedInput-root': {
    color: color || theme.palette.text.default,
    height: '100%',
    width: '100%',
    '& fieldset': {
      border: 'none',
      transition: 'border-color 0.3s ease-in-out',
    },
    '&:hover fieldset': {
      border: 'none',
    },
    '&.Mui-focused fieldset': {
      border: 'none',
    },
  },
  '& .MuiInputBase-input': {
    padding: '10px 0',
    height: '100%',
    width: '100%',
    boxSizing: 'border-box',
    transition: 'padding 0.3s ease-in-out, text-indent 0.3s ease-in-out',
    '&::placeholder': {
      color: isFocused ? '#aaa' : 'transparent',
      fontWeight: 300,
      textIndent: '0',
    },
  },
}));

const CustomInputLabel = styled(
  React.forwardRef(({ isFocused, labelColor, bgColor, ...other }, ref) => (
    <InputLabel ref={ref} {...other} />
  ))
)(({ theme,isFocused, labelColor, bgColor }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  padding: '0px 15px',
  borderTopLeftRadius: '3px',
  borderBottomLeftRadius: '3px', 
  borderTopRightRadius: isFocused ? '0px' : '3px',
  borderBottomRightRadius: isFocused ? '0px' : '3px',
  color: labelColor || theme.palette.text.inputLabelColor,
  backgroundColor: isFocused ? 'none' : bgColor || theme.palette.background.inputLabelBg,
  pointerEvents: 'none',
  fontSize: '16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transform: isFocused ? 'translateY(-100%)' : 'none', 
  transition: 'all 0.3s ease-in-out',
  overflow: 'hidden',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: '6px',
    left: '5px',
    right: '5px',
    bottom: '6px',
    background: bgColor || theme.palette.background.inputLabelBg,
    borderRadius: '3px',
    zIndex: -1,
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    // background: bgColor || 'var(--yellow-color)',
    zIndex: -2,
  },
}));

export default function TextFieldStyle5({
  label = 'Label',
  placeholder = 'Placeholder',
  color,
  backgroundColor,
  labelColor,
  labelBackgroundColor,
  type = 'text',
}) {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const labelRef = useRef(null);

  const handleBlur = (event) => {
    setIsFocused(false);
    const value = event.target.value.trim();
    setHasValue(value !== '');
  };

  const handleChange = (event) => {
    const value = event.target.value.trim();
    setHasValue(value !== '');
  };

  return (
    <StyledBox>
      <CustomTextField
        id={label}
        placeholder={placeholder}
        variant="outlined"
        onFocus={() => setIsFocused(true)}
        onBlur={handleBlur}
        onChange={handleChange}
        InputProps={{
          disableUnderline: true,
        }}
        isFocused={isFocused}
        bgColor={backgroundColor}
        color={color}
        type={type}
      />
      <CustomInputLabel
        ref={labelRef}
        htmlFor={label}
        isFocused={isFocused}
        labelColor={labelColor}
        bgColor={labelBackgroundColor}
      >
        {label}
      </CustomInputLabel>
    </StyledBox>
  );
}
