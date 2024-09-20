import CodeIcon from '@mui/icons-material/Code';
import { Box, Typography, useTheme } from "@mui/material";
import Layout from "layouts/Layout";
import { memo, useState } from "react";
import TextFieldColor from './TextFieldColor';
import TextFieldCustom from './TextFieldCustom';
import TextFieldInputAdornment from './TextFieldInputAdornment';
import TextFieldSizes from './TextFieldSizes';
import TextFieldValidation from './TextFieldValidation';
import TextFieldVariant from './TextFieldVariant';

const TextFieldContainer = memo(() => {
    const theme = useTheme();
    const [codeBlock , setCodeBlock] = useState('');
  
    const toggleCodeBlock = (text) => {
      setCodeBlock((prev) => (prev === text ? '' : text));
    };
  return (
    <Layout>
      <Box
        sx={{
          padding: "19.5px 30px",
          boxSizing: "border-box",
          height: "calc(100vh - 68px)",
          overflowY: "auto",
        }}
        className="custom-scrollbar"
      >
        <Box className='grid grid-cols-2 gap-5'>
          {/* -----------------------------------------------------||Custom Text Field Start Here------------------------------------ */}
            <Box
              className="p-5"
              sx={{
                minHeight: '180px',
                border: `2px solid ${theme.palette.primary.border}`,
                borderRadius: "20px",
                bgcolor: theme.palette.primary.cardBg,
              }}
            >
                <Box className="flex justify-between items-center">
                  <Typography
                    className="!text-xl pb-3"
                    sx={{ color: theme.palette.text.white }}
                  >
                    Custom
                  </Typography>
                  <CodeIcon sx={{color: 'var(--icon-color)', cursor: 'pointer'}} onClick={() => toggleCodeBlock('customTextField')}/>
                </Box>
                <Typography sx={{ color: theme.palette.text.semiWhite }} className='pb-3'>
                  Use the <code>CustomTextField</code> component for the custom variant.
                </Typography>

                <TextFieldCustom isOpen={codeBlock === 'customTextField'}/>
            </Box>
          {/* -----------------------------------------------------//Custom Text Field End Here------------------------------------ */}

          {/* -----------------------------------------------------||Text Field Size Start Here------------------------------------ */}
            <Box
              className="p-5"
              sx={{
                border: `2px solid ${theme.palette.primary.border}`,
                borderRadius: "20px",
                bgcolor: theme.palette.primary.cardBg,
              }}
            >
                <Box className="flex justify-between items-center">
                  <Typography
                    className="!text-xl pb-3"
                    sx={{ color: theme.palette.text.white }}
                  >
                    Sizes
                  </Typography>
                  <CodeIcon sx={{color: 'var(--icon-color)', cursor: 'pointer'}} onClick={() => toggleCodeBlock('textFieldSizes')}/>
                </Box>
                <Typography sx={{ color: theme.palette.text.semiWhite }} className='pb-3'>
                  Use <code>size</code> prop for different sizes of text fields.
                </Typography>

                <TextFieldSizes isOpen={codeBlock === 'textFieldSizes'}/>
            </Box>
          {/* -----------------------------------------------------//Text Field Size End Here------------------------------------ */}
        </Box>

        {/* -----------------------------------------------------||Text Field Color Start Here------------------------------------ */}
        <Box
          className="p-5 mt-5"
          sx={{
            border: `2px solid ${theme.palette.primary.border}`,
            borderRadius: "20px",
            bgcolor: theme.palette.primary.cardBg,
          }}
        >
            <Box className="flex justify-between items-center">
              <Typography
                className="!text-xl pb-3"
                sx={{ color: theme.palette.text.white }}
              >
                Color
              </Typography>
              <CodeIcon sx={{color: 'var(--icon-color)', cursor: 'pointer'}} onClick={() => toggleCodeBlock('textFieldColor')}/>
            </Box>
            <Typography sx={{ color: theme.palette.text.semiWhite }} className='pb-3'>
              <code>color={`{'secondary' | 'success' | 'error' | 'warning' | 'info'}`}</code> prop changes the highlight
              color of the text field when focused.
            </Typography>

            <TextFieldColor isOpen={codeBlock === 'textFieldColor'}/>
        </Box>
        {/* -----------------------------------------------------//Text Field Color End Here------------------------------------ */}

        {/* -----------------------------------------------------||Text Field Input Adornment Start Here------------------------------------ */}
        <Box
          className="p-5 mt-5"
          sx={{
            border: `2px solid ${theme.palette.primary.border}`,
            borderRadius: "20px",
            bgcolor: theme.palette.primary.cardBg,
          }}
        >
            <Box className="flex justify-between items-center">
              <Typography
                className="!text-xl pb-3"
                sx={{ color: theme.palette.text.white }}
              >
                Input Adornment
              </Typography>
              <CodeIcon sx={{color: 'var(--icon-color)', cursor: 'pointer'}} onClick={() => toggleCodeBlock('textFieldInputAdornment')}/>
            </Box>
            <Typography sx={{ color: theme.palette.text.semiWhite }} className='pb-3'>
              The main way is with an <code>InputAdornment</code>. This can be used to add a prefix, a suffix or an action
              to an input. For instance, you can use an icon button to hide or reveal the password.
            </Typography>

            <TextFieldInputAdornment isOpen={codeBlock === 'textFieldInputAdornment'}/>
        </Box>
        {/* -----------------------------------------------------//Text Field Input Adornment End Here------------------------------------ */}

        {/* -----------------------------------------------------||Text Field Variant Start Here------------------------------------ */}
        <Box
          className="p-5 mt-5"
          sx={{
            border: `2px solid ${theme.palette.primary.border}`,
            borderRadius: "20px",
            bgcolor: theme.palette.primary.cardBg,
          }}
        >
            <Box className="flex justify-between items-center">
              <Typography
                className="!text-xl pb-3"
                sx={{ color: theme.palette.text.white }}
              >
                Variant
              </Typography>
              <CodeIcon sx={{color: 'var(--icon-color)', cursor: 'pointer'}} onClick={() => toggleCodeBlock('textFieldVariant')}/>
            </Box>
            <Typography sx={{ color: theme.palette.text.semiWhite }} className='pb-3'>
              Use <code>variant={`{'filled' | 'standard'}`}</code> prop with the <code>TextField</code> component for
              different text fields.
            </Typography>

            <TextFieldVariant isOpen={codeBlock === 'textFieldVariant'}/>
            
        </Box>
        {/* -----------------------------------------------------//Text Field Variant End Here------------------------------------ */}
        {/* -----------------------------------------------------||Text Field Validation Start Here------------------------------------ */}
        <Box
          className="p-5 mt-5"
          sx={{
            border: `2px solid ${theme.palette.primary.border}`,
            borderRadius: "20px",
            bgcolor: theme.palette.primary.cardBg,
          }}
        >
            <Box className="flex justify-between items-center">
              <Typography
                className="!text-xl pb-3"
                sx={{ color: theme.palette.text.white }}
              >
                Validation
              </Typography>
              <CodeIcon sx={{color: 'var(--icon-color)', cursor: 'pointer'}} onClick={() => toggleCodeBlock('textFieldValidation')}/>
            </Box>
            <Typography sx={{ color: theme.palette.text.semiWhite }} className='pb-3'>
              The <code>error</code> prop toggles the error state, the <code>helperText</code> prop can then be used to
              provide feedback to the user about the error.
            </Typography>

            <TextFieldValidation isOpen={codeBlock === 'textFieldValidation'}/>
        </Box>
        {/* -----------------------------------------------------//Text Field Validation End Here------------------------------------ */}
      </Box>
    </Layout>
  );
});

export default TextFieldContainer;
