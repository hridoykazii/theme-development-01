/* eslint-disable no-unused-vars */
import CodeIcon from '@mui/icons-material/Code';
import { Box, FormControl, MenuItem, Typography, useTheme } from "@mui/material";
import Layout from "layouts/Layout";
import { memo, useState } from "react";
import CustomSelect from './CustomSelect';

const SelectListContainer = memo(() => {
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
                <FormControl>
                    <CustomSelect select defaultValue='' label='Default' color='error' size='medium'>
                        <MenuItem value=''>
                        <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                
                    </CustomSelect>
                </FormControl>
            </Box>
          {/* -----------------------------------------------------//Custom Text Field End Here------------------------------------ */}
          </Box>
      </Box>
    </Layout>
  );
});

export default SelectListContainer;
