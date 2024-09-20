import { Box } from '@mui/material';
import { customTextField } from 'common/code/textField';
import CodeBlock from 'components/Test/CodeBlock';
import { memo } from 'react';
import CustomTextField from './CustomTextField';

const TextFieldCustom = memo(({isOpen}) => {
    return (
        <Box>
            <CustomTextField label="Default"/>
            {isOpen && (
                <CodeBlock code={customTextField}/>
            )}
        </Box>
    );
});

export default TextFieldCustom;