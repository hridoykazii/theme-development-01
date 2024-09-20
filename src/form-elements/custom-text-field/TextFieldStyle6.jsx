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
  padding: '0px 15px',
  fontFamily: '"Open Sans", sans-serif',
  fontWeight: 400,
  borderTopLeftRadius: '3px',
  borderBottomLeftRadius: '3px', 
  borderTopRightRadius: isFocused ? '0px' : '3px',
  borderBottomRightRadius: isFocused ? '0px' : '3px',
  backgroundColor: bgColor || theme.palette.background.inputBg,
  border: 'none',
  borderRadius: '3px',
  outline: 'none',
  textIndent: isFocused ? '0' : '75px',
  transition: 'all .3s ease-in-out',
  '& .MuiOutlinedInput-root': {
    color: color || theme.palette.text.default,
    height: '100%',
    width: '100%',
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
  '& .MuiInputBase-input': {
    padding: '0px',
    height: '100%',
    width: '100%',
    boxSizing: 'border-box',
    textIndent: '0',
    transition: 'padding 0.3s ease-in-out, text-indent 0.3s ease-in-out',
    '&::placeholder': {
      color: isFocused ? theme.palette.text.placeholder : 'transparent',
      textIndent: '0',
      fontWeight: 300,
    },
    '&.Mui-focused': {
      boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.2)',
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
  padding: '11px 15px',
  color: labelColor || theme.palette.text.inputLabelColor,
  textShadow: '0 1px 0 rgba(19,74,70,.4)',
  backgroundColor: bgColor || theme.palette.background.inputLabelBg,
  borderTopLeftRadius: '3px',
  borderBottomLeftRadius: '3px', 
  borderTopRightRadius: isFocused ? '0px' : '3px',
  borderBottomRightRadius: isFocused ? '0px' : '3px',
  transformOrigin: 'right center',
  transform: isFocused ? 'perspective(600px) translateX(-100%) rotateY(80deg)' : 'perspective(300px) scaleX(1) rotateY(0deg)',
  transition: 'all 0.3s ease-in-out',
  overflow: 'hidden',
}));

export default function TextFieldStyle6({
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
