import { Box } from '@mui/material';
import { textFieldSizes } from 'common/code/textField';
import CodeBlock from 'components/Test/CodeBlock';
import { memo } from 'react';
import CustomTextField from './CustomTextField';

const TextFieldSizes = memo(({isOpen}) => {
    return (
        <Box>
            <Box className='flex justify-between items-center'>
                <CustomTextField size='small' label='Small' placeholder='Size'/>
                <CustomTextField size='medium' label='Medium' placeholder='Size'/>
                <CustomTextField size='large' label='Large' placeholder='Size'/>
            </Box>
            {isOpen && (
                <CodeBlock code={textFieldSizes}/>
            )}
        </Box>
    );
});

export default TextFieldSizes;