import CodeIcon from '@mui/icons-material/Code';
import { Box, Typography, useTheme } from "@mui/material";
import Layout from "layouts/Layout";
import { memo, useState } from "react";
import '../../../src/assets/css/customTextField.css';
import Style1 from './Style1';
import Style2 from './Style2';
import Style3 from './Style3';
import Style4 from './Style4';
import Style5 from './Style5';
import Style6 from './Style6';
import Style7 from './Style7';
import Style8 from './Style8';

const CustomTextFieldContainer = memo(() => {
    const theme = useTheme();
    // eslint-disable-next-line no-unused-vars
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
      {/* -------------------------------------------||Style One Start Here--------------------------------------------- */}
        <Box
          className="p-5 mb-5"
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
              Style One
            </Typography>
            <CodeIcon
              sx={{ color: "var(--icon-color)", cursor: "pointer" }}
              onClick={() => toggleCodeBlock("style1")}
            />
          </Box>
          <Typography sx={{ color: theme.palette.text.semiWhite }}>
            Use the <code>TextFieldStyle1</code> component for the custom variant.
          </Typography>
          <Style1 isOpen={codeBlock === 'style1'}/>
        </Box>
        {/* -------------------------------------------//Style One End Here--------------------------------------------- */}
        {/* -------------------------------------------||Style Two Start Here--------------------------------------------- */}
        <Box
          className="p-5 mb-5"
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
              Style Two
            </Typography>
            <CodeIcon
              sx={{ color: "var(--icon-color)", cursor: "pointer" }}
              onClick={() => toggleCodeBlock("style2")}
            />
          </Box>
          <Typography sx={{ color: theme.palette.text.semiWhite }}>
            Use the <code>TextFieldStyle2</code> component for the custom variant.
          </Typography>
          <Style2 isOpen={codeBlock === 'style2'}/>
        </Box>
        {/* -------------------------------------------//Style Two End Here--------------------------------------------- */}
        {/* -------------------------------------------||Style Three Start Here--------------------------------------------- */}
        <Box
          className="p-5 mb-5"
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
              Style Three
            </Typography>
            <CodeIcon
              sx={{ color: "var(--icon-color)", cursor: "pointer" }}
              onClick={() => toggleCodeBlock("style3")}
            />
          </Box>
          <Typography sx={{ color: theme.palette.text.semiWhite }}>
            Use the <code>TextFieldStyle3</code> component for the custom variant.
          </Typography>
          <Style3 isOpen={codeBlock === 'style3'}/>
        </Box>
        {/* -------------------------------------------//Style Three End Here--------------------------------------------- */}

        {/* -------------------------------------------||Style Four Start Here--------------------------------------------- */}
        <Box
          className="p-5 mb-5"
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
              Style Four
            </Typography>
            <CodeIcon
              sx={{ color: "var(--icon-color)", cursor: "pointer" }}
              onClick={() => toggleCodeBlock("style4")}
            />
          </Box>
          <Typography sx={{ color: theme.palette.text.semiWhite }}>
            Use the <code>TextFieldStyle4</code> component for the custom variant.
          </Typography>
          <Style4 isOpen={codeBlock === 'style4'}/>
        </Box>
        {/* -------------------------------------------//Style Four End Here--------------------------------------------- */}

        {/* -------------------------------------------||Style Five Start Here--------------------------------------------- */}
        <Box
          className="p-5 mb-5"
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
              Style Five
            </Typography>
            <CodeIcon
              sx={{ color: "var(--icon-color)", cursor: "pointer" }}
              onClick={() => toggleCodeBlock("style5")}
            />
          </Box>
          <Typography sx={{ color: theme.palette.text.semiWhite }}>
            Use the <code>TextFieldStyle5</code> component for the custom variant.
          </Typography>
          <Style5 isOpen={codeBlock === 'style5'}/>
        </Box>
        {/* -------------------------------------------//Style Five End Here--------------------------------------------- */}

        {/* -------------------------------------------||Style Six Start Here--------------------------------------------- */}
        <Box
          className="p-5 mb-5"
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
              Style Six
            </Typography>
            <CodeIcon
              sx={{ color: "var(--icon-color)", cursor: "pointer" }}
              onClick={() => toggleCodeBlock("style6")}
            />
          </Box>
          <Typography sx={{ color: theme.palette.text.semiWhite }}>
            Use the <code>TextFieldStyle6</code> component for the custom variant.
          </Typography>
          <Style6 isOpen={codeBlock === 'style6'}/>
        </Box>
        {/* -------------------------------------------//Style Six End Here--------------------------------------------- */}

        {/* -------------------------------------------||Style Seven Start Here--------------------------------------------- */}
        <Box
          className="p-5 mb-5"
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
              Style Seven
            </Typography>
            <CodeIcon
              sx={{ color: "var(--icon-color)", cursor: "pointer" }}
              onClick={() => toggleCodeBlock("style7")}
            />
          </Box>
          <Typography sx={{ color: theme.palette.text.semiWhite }}>
            Use the <code>TextFieldStyle7</code> component for the custom variant.
          </Typography>
          <Style7 isOpen={codeBlock === 'style7'}/>
        </Box>
        {/* -------------------------------------------//Style Seven End Here--------------------------------------------- */}

        {/* -------------------------------------------||Style Eight Start Here--------------------------------------------- */}
        <Box
          className="p-5 mb-5"
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
              Style Eight
            </Typography>
            <CodeIcon
              sx={{ color: "var(--icon-color)", cursor: "pointer" }}
              onClick={() => toggleCodeBlock("style8")}
            />
          </Box>
          <Typography sx={{ color: theme.palette.text.semiWhite }}>
            Use the <code>TextFieldStyle8</code> component for the custom variant.
          </Typography>
          <Style8 isOpen={codeBlock === 'style8'}/>
        </Box>
        {/* -------------------------------------------//Style Eight End Here--------------------------------------------- */}
      </Box>
    </Layout>
  );
});

export default CustomTextFieldContainer;
