import { Box } from '@mui/material';
import { textFieldColor } from 'common/code/textField';
import CodeBlock from 'components/Test/CodeBlock';
import { memo } from 'react';
import CustomTextField from './CustomTextField';

const TextFieldColor = memo(({isOpen}) => {
    return (
        <Box>
            <Box className="flex justify-between items-center">
                <CustomTextField label='Secondary' color='secondary'/>
                <CustomTextField label='Success' color='success'/>
                <CustomTextField label='Error' color='error'/>
                <CustomTextField label='Warning' color='warning'/>
                <CustomTextField label='Info' color='info'/>
            </Box>
            {isOpen && (
                <CodeBlock code={textFieldColor}/>
            )}
        </Box>
    );
});

export default TextFieldColor;