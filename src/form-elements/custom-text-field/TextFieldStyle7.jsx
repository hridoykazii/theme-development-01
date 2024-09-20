import { Box, InputLabel, TextField } from '@mui/material';
import { styled } from '@mui/system';
import React, { useRef, useState } from 'react';

const StyledBox = styled(Box)({
  position: 'relative',
  display: 'inline-block',
  margin: '0px 100px',
  marginTop: '20px',
});

const CustomTextField = styled(({ isFocused, labelWidth, bgColor, color, ...other }) => (
  <TextField {...other} />
))(({ theme, isFocused, bgColor, color, hasValue }) => ({
  display: 'inline-block',
  width: '350px',
  height: '45px',
  fontFamily: '"Open Sans", sans-serif',
  fontWeight: 400,
  backgroundColor: bgColor || theme.palette.background.inputBg,
  border: 0,
  borderRadius: '3px',
  outline: 0,
  textIndent: isFocused ? '0' : '75px',
  transition: 'all .3s ease-in-out',
  '& .MuiOutlinedInput-root': {
    height: '100%',
    width: '100%',
    '& fieldset': {
      border: 'none',
    },
  },
  '& .MuiInputBase-input': {
    height: '100%',
    width: '100%',
    color: color || theme.palette.text.default,
    boxSizing: 'border-box',
    '&::placeholder': {
      color: isFocused ? theme.palette.text.placeholder : 'transparent',
      fontWeight: 300,
      textIndent: isFocused ? '0' : '75px',
    },
  },
  '& .MuiOutlinedInput-input': {
    padding: '12.5px 15px',
  },
}));

const CustomInputLabel = styled(
  React.forwardRef(({ isFocused, labelColor, bgColor, ...other }, ref) => (
    <InputLabel ref={ref} {...other} />
  ))
)(({ theme,isFocused, labelColor, bgColor }) => ({
  display: 'inline-block',
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '11px 15px',
  color: labelColor || theme.palette.text.inputLabelColor,
  backgroundColor: bgColor || theme.palette.background.inputLabelBg,
  borderRadius: '3px',
  transformOrigin: '2px 2px',
  transform: isFocused ? 'rotate(82deg)' : 'rotate(0)',
  transition: 'transform 0.4s ease-in-out',
  zIndex: 2,
  animation: isFocused ? 'swing 1.4s 1 ease-in-out' : 'swing-back 0.4s 1 ease-in-out',
  '&::before, &::after': {
    content: '""',
    position: 'absolute',
    right: 0,
    left: 0,
    zIndex: -1,
    transition: 'all .4s ease-in-out',
  },
  '&::before': {
    top: 0,
    bottom: 0,
    background: 'rgba(3,36,41,.2)',
    borderTopLeftRadius: '3px',
    borderBottomLeftRadius: '3px',
    zIndex: -2,
    right: '20%',
    transformOrigin: 'left bottom',
    transform: isFocused ? 'rotate(25deg) translateX(-10px) translateY(-5px)' : 'none',
  },
  '&::after': {
    top: 0,
    bottom: 0,
    background: bgColor || theme.palette.background.inputLabelBg,
    borderRadius: '3px',
  },
}));

export default function TextFieldStyle7({
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
        hasValue={hasValue}
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
