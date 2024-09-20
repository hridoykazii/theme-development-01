import OutboxIcon from '@mui/icons-material/Outbox';
import { Box } from '@mui/material';
import { IconButton } from 'common/code/button';
import CodeBlock from 'components/Test/CodeBlock';
import { memo } from 'react';
import Button from './Button';

const ButtonIcon = memo(({isOpen}) => {
    return (
        <Box>
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
            {isOpen && (
                <CodeBlock code={IconButton}/>
            )}
        </Box>
    );
});

export default ButtonIcon;