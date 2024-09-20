import { Box, FormControl, TextField, Typography } from '@mui/material';
import { memo } from 'react';

const TextBox = memo(({type='text',setText, placeholder='Placeholder', label}) => {
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <Box>
      <FormControl
        fullWidth
        sx={{
          marginBottom: "1rem",
          marginTop: "1rem",
          "& .MuiOutlinedInput-root": {
            height: "50px",
            width: "100%",
            color: "var(--color-white)",
            borderRadius: '8px',
            backgroundColor: "var(--input-bg-color)",
            "& fieldset": {
              border: "none",
            },
            "&:hover fieldset": {
              border: "none",
            },
            "&.Mui-focused fieldset": {
              border: `1px solid var(--border-color)`,
            },
          },
        }}
      >
        <Typography className="!mb-2">{label}</Typography>
        <TextField type={type} onChange={handleChange} placeholder={placeholder} variant="outlined" />
      </FormControl>
    </Box>
  );
});

export default TextBox;