import { Box } from '@mui/material';
import { ButtonSize } from 'common/code/button';
import CodeBlock from 'components/Test/CodeBlock';
import { memo } from 'react';
import Button from './Button';

const ButtonSizes = memo(({isOpen}) => {
    return (
        <Box>
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
            {isOpen && (
                <CodeBlock code={ButtonSize}/>
            )}
        </Box>
    );
});

export default ButtonSizes;