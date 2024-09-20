import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Typography, useTheme } from '@mui/material';
import { FabButtonSize } from 'common/code/button';
import CodeBlock from 'components/Test/CodeBlock';
import { memo } from 'react';
import Fab from './Fab';

const ButtonFabSize = memo(({isOpen}) => {
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
            {isOpen && (
                <CodeBlock code={FabButtonSize}/>
            )}
        </Box>
    );
});

export default ButtonFabSize;