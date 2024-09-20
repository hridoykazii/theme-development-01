export const ContainedButton = `
import { Box } from "@mui/material";
import { memo } from "react";
import Button from "./Button";

const ButtonContained = memo(() => {
  return (
    <Box>
      <Box className="flex justify-start items-center gap-5 mt-3">
        <Button variant="contained" color='primary' >
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="error">
          Danger
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" disabled>
          Disabled
        </Button>
        <Button variant="contained" href="#">
          Link
        </Button>
      </Box>
    </Box>
  );
});

export default ButtonContained;

`;

export const TextButton = `
import { Box } from "@mui/material";
import { memo } from "react";
import Button from "./Button";

const ButtonText = memo(() => {
  return (
    <Box>
      <Box className="flex justify-start items-center gap-5 mt-3">
        <Button variant="text" color="primary">
          Primary
        </Button>
        <Button variant="text" color="secondary">
          Secondary
        </Button>
        <Button variant="text" color="success">
          Success
        </Button>
        <Button variant="text" color="warning">
          Warning
        </Button>
        <Button variant="text" color="error">
          Danger
        </Button>
        <Button variant="text" color="info">
          Info
        </Button>
        <Button variant="text" disabled>
          Disabled
        </Button>
        <Button variant="text" href="#">
          Link
        </Button>
      </Box>
    </Box>
  );
});

export default ButtonText;

`

export const OutlinedButton = `
import { Box } from "@mui/material";
import { memo } from "react";
import Button from "./Button";

const ButtonOutlined = memo(() => {
  return (
    <Box>
      <Box className="flex justify-start items-center gap-5 mt-3">
        <Button variant="outlined" color="primary">
          Primary
        </Button>
        <Button variant="outlined" color="secondary">
          Secondary
        </Button>
        <Button variant="outlined" color="success">
          Success
        </Button>
        <Button variant="outlined" color="warning">
          Warning
        </Button>
        <Button variant="outlined" color="error">
          Danger
        </Button>
        <Button variant="outlined" color="info">
          Info
        </Button>
        <Button variant="outlined" disabled>
          Disabled
        </Button>
        <Button variant="outlined" href="#">
          Link
        </Button>
      </Box>
    </Box>
  );
});

export default ButtonOutlined;

`

export const TonalButton = `
import { Box } from "@mui/material";
import { memo } from "react";
import Button from "./Button";

const ButtonTonal = memo(() => {
  return (
    <Box>
      <Box className="flex justify-start items-center gap-5 mt-3">
        <Button variant="tonal" color="primary">
          Primary
        </Button>
        <Button variant="tonal" color="secondary">
          Secondary
        </Button>
        <Button variant="tonal" color="success">
          Success
        </Button>
        <Button variant="tonal" color="warning">
          Warning
        </Button>
        <Button variant="tonal" color="error">
          Danger
        </Button>
        <Button variant="tonal" color="info">
          Info
        </Button>
        <Button variant="tonal" disabled>
          Disabled
        </Button>
        <Button variant="tonal" color="primary" href="#">
          Link
        </Button>
      </Box>
    </Box>
  );
});

export default ButtonTonal;

`

export const IconButton = `
import OutboxIcon from '@mui/icons-material/Outbox';
import { Box } from '@mui/material';
import { memo } from 'react';
import Button from './Button';

const ButtonIcon = memo(() => {
    return (
        <Box className="flex justify-start items-center gap-5 mt-3">
            <Button 
                variant="iconLabel" 
                color="primary" 
                startIcon={<OutboxIcon />} 
            >
                Primary
            </Button> 

            <Button 
                variant="iconLabel" 
                color="secondary" 
                endIcon={<OutboxIcon />} 
            >
                Secondary
            </Button>   
        </Box>
    );
});

export default ButtonIcon;
`

export const ButtonSize = `
import { Box } from '@mui/material';
import { memo } from 'react';
import Button from './Button';

const ButtonSizes = memo(() => {
    return (
        <Box className="flex justify-start items-center gap-5 mt-3">
            <Button 
                variant="contained" 
                size='small'
                color='primary'
            >
                Small
            </Button>
            <Button 
                variant="contained" 
                size='medium'
                color='primary'
            >
                Medium
            </Button>
            <Button 
                variant="contained" 
                size='large'
                color='primary'
            >
                Large
            </Button>

        </Box>
    );
});

export default ButtonSizes;
`
export const FabButton = `
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Typography, useTheme } from '@mui/material';
import { memo } from 'react';
import Fab from './Fab';

const ButtonFab = memo(() => {
    const theme = useTheme();
    return (
        <Box>
            <Typography
                className="!text-xl pt-5"
                sx={{ color: theme.palette.text.white }}
                >Circular Button
            </Typography>
            <Box className="flex justify-start items-center gap-5 mt-3">
                <Fab 
                    variant='circular'
                    color="primary" 
                    icon={<AddIcon/>} 
                    >
                </Fab>
                <Fab 
                    variant='circular'
                    color="secondary" 
                    icon={<EditIcon/>} 
                    >
                </Fab>
                <Fab 
                    variant='circular'
                    color="error" 
                    icon={<DeleteIcon/>} 
                    >
                </Fab>
            </Box>
            <Typography
                className="!text-xl pt-5"
                sx={{ color: theme.palette.text.white }}
                >Expanded Button
            </Typography>
            <Box className="flex justify-start items-center gap-5 mt-3">
                <Fab 
                    variant='expanded'
                    color="primary" 
                    icon={<AddIcon/>} 
                    >
                    Add
                </Fab>
                <Fab 
                    variant='expanded'
                    color="secondary" 
                    icon={<EditIcon/>} 
                    >
                    Edit
                </Fab>
                <Fab 
                    variant='expanded'
                    color="error" 
                    icon={<DeleteIcon/>} 
                    >
                    Delete
                </Fab>
            </Box>
        </Box>
    );
});

export default ButtonFab;
`

export const FabButtonSize = `
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Typography, useTheme } from '@mui/material';
import { memo } from 'react';
import Fab from './Fab';

const ButtonFabSize = memo(() => {
    const theme = useTheme();
    return (
        <Box>
            <Typography
                className="!text-xl pt-5"
                sx={{ color: theme.palette.text.white }}
                >Circular Button
            </Typography>
            <Box className="flex justify-start items-center gap-5 mt-3">
                <Fab 
                    variant='circular'
                    color="primary" 
                    size='small'
                    icon={<AddIcon/>} 
                    >
                </Fab>
                <Fab 
                    variant='circular'
                    color="secondary" 
                    size='medium'
                    icon={<EditIcon/>} 
                    >
                </Fab>
                <Fab 
                    variant='circular'
                    color="error" 
                    size='large'
                    icon={<DeleteIcon fontSize='large'/>} 
                    >
                </Fab>
            </Box>
            <Typography
                className="!text-xl pt-5"
                sx={{ color: theme.palette.text.white }}
                >Expanded Button
            </Typography>
            <Box className="flex justify-start items-center gap-5 mt-3">
                <Fab 
                    variant='expanded'
                    color="primary" 
                    size='small'
                    icon={<AddIcon fontSize='small'/>} 
                    >
                    Add
                </Fab>
                <Fab 
                    variant='expanded'
                    color="secondary" 
                    size='medium'
                    icon={<EditIcon fontSize='medium'/>} 
                    >
                    Edit
                </Fab>
                <Fab 
                    variant='expanded'
                    color="error"
                    size='large' 
                    icon={<DeleteIcon fontSize='large'/>} 
                    >
                    Delete
                </Fab>
            </Box>
        </Box>
    );
});

export default ButtonFabSize;
`