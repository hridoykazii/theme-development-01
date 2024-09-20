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
    padding: `10px 10px 10px 0px`,
    height: '100%',
    width: '100%',
    boxSizing: 'border-box',
    textIndent: isFocused ? '0' : '75px',
    transition: 'padding 0.3s ease-in-out, text-indent 0.3s ease-in-out',
    '&::placeholder': {
      color: isFocused ? theme.palette.text.placeholder : 'transparent',
      fontWeight: 300,
      textAlign: 'left',
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
  height: '100%',
  padding: '0px 15px',
  borderTopRightRadius: isFocused ? '0px' : '3px',
  borderBottomRightRadius: isFocused ? '0px' : '3px',
  borderTopLeftRadius: '3px',
  borderBottomLeftRadius: '3px', 
  color: labelColor || theme.palette.text.inputLabelColor,
  backgroundColor: bgColor || theme.palette.background.inputLabelBg,
  pointerEvents: 'none',
  fontSize: '16px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  transform: isFocused ? 'translateX(-100%)' : 'none', 
  transition: 'all 0.3s ease-in-out',
  overflow: 'hidden',

  '&::before, &::after': {
    content: '""',
    position: 'absolute',
    right: 0,
    left: 0,
    zIndex: -1,
    transition: 'all .3s ease-in-out',
  },
  '&::before': {
    top: '5px',
    bottom: '5px',
    backgroundColor: bgColor || theme.palette.background.inputLabelBg,
    borderTopLeftRadius: '3px',
    borderBottomLeftRadius: '3px',
  },
  '&::after': {
    top: 0,
    bottom: 0,
    backgroundColor: bgColor || theme.palette.background.inputLabelBg,
  },

  '&:after': {
    transform: isFocused ? 'translateX(100%)' : 'none',
  },
}));

export default function TextFieldStyle1({
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
