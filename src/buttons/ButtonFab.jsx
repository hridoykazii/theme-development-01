import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Typography, useTheme } from '@mui/material';
import { FabButton } from 'common/code/button';
import CodeBlock from 'components/Test/CodeBlock';
import { memo } from 'react';
import Fab from './Fab';

const ButtonFab = memo(({isOpen}) => {
    const theme = useTheme();
    return (
        <Box>
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
            {isOpen && (
                <CodeBlock code={FabButton}/>
            )}
        </Box>
    );
});

export default ButtonFab;