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
  backgroundColor: bgColor || theme.palette.background.inputBg,
  border: 0,
  borderRadius: '3px',
  outline: 0,
  textIndent: isFocused ? '0' : '60px',
  transition: 'all .3s ease-in-out',
  
  '& .MuiOutlinedInput-root': {
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
    padding: '0',
    height: '100%',
    width: '100%',
    boxSizing: 'border-box',
    transition: 'padding 0.3s ease-in-out, text-indent 0.3s ease-in-out',
    color: color || theme.palette.text.default,
    '&::placeholder': {
      color: isFocused ? theme.palette.text.placeholder : 'transparent',
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
  display: 'inline-block',
  position: 'absolute',
  top: '8px',
  left: '0',
  bottom: '8px',
  padding: '7px 15px',
  color: labelColor || theme.palette.text.white,
  fontSize: '11px',
  fontWeight: 700,
  textTransform: 'uppercase',
  textShadow: isFocused ? '0 1px 0 rgba(19,74,70,.4)' : '0 1px 0 rgba(19,74,70,0)',
  backgroundColor: isFocused ? bgColor || theme.palette.background.inputLabelBg : 'transparent',
  borderRadius: '3px',
  transition: 'all 0.3s ease-in-out',
  transform: isFocused ? 'translateY(-40px)' : 'none',
  
  '&::after': {
    content: '""',
    position: 'absolute',
    width: '0',
    height: '0',
    top: '100%',
    left: '50%',
    marginLeft: '-3px',
    borderLeft: '3px solid transparent',
    borderRight: '3px solid transparent',
    borderTop: isFocused ? '4px solid var(--yellow-color)' : '3px solid rgba(122,184,147,0)',
    transition: 'all .3s ease-in-out',
  },
}));

export default function TextFieldStyle8({
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
