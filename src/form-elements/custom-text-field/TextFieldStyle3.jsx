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
))(({ theme, isFocused, bgColor, color }) => ({
  display: 'inline-block',
  width: '350px',
  height: '45px',
  padding: '0px 10px',
  paddingLeft: '10px',
  fontFamily: '"Open Sans", sans-serif',
  fontWeight: 400,
  backgroundColor: bgColor || theme.palette.background.inputBg,
  border: 0,
  borderTopRightRadius: '3px',
  borderBottomRightRadius: '3px',
  borderTopLeftRadius: isFocused ? '0px' : '3px',
  borderBottomLeftRadius: isFocused ? '0px' : '3px', 
  outline: 0,
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
    padding: `10px 10px 10px 0px`,
    height: '100%',
    width: '100%',
    boxSizing: 'border-box',
    textIndent: isFocused ? '0' : '65px',
    transition: 'padding 0.3s ease-in-out, text-indent 0.3s ease-in-out',
    '&::placeholder': {
      color: isFocused ? theme.palette.text.placeholder : 'transparent',
      fontWeight: 300,
      textAlign: 'left',
    },
  },
}));

const CustomInputLabel = styled(
  React.forwardRef(({ isFocused, labelColor, bgColor, ...other }, ref) => (
    <InputLabel ref={ref} {...other} />
  ))
)(({ theme, isFocused, labelColor, bgColor }) => ({
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
  backgroundColor: bgColor || theme.palette.background.inputLabelBg,
  pointerEvents: 'none',
  fontSize: '16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transform: isFocused ? 'rotate(-66deg)' : 'none',
  transformOrigin: 'left bottom',
  transition: 'all 0.4s ease-in-out',
  zIndex: 2,

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
    backgroundColor: bgColor || theme.palette.background.inputLabelBg,
    borderRadius: '3px',
  },
}));

export default function TextFieldStyle3({
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
