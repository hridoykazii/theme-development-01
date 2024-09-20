import { Box } from '@mui/material';
import { style7 } from 'common/code/customTextField';
import CodeBlock from 'components/Test/CodeBlock';
import { memo } from 'react';
import TextFieldStyle7 from './TextFieldStyle7';

const Style7 = memo(({isOpen}) => {
    return (
        <Box>
            <Box className="flex justify-start items-center pb-3">
                <TextFieldStyle7
                    label="Name"
                    placeholder="Enter your name"
                    type="text"
                />
                <TextFieldStyle7
                    label="Email"
                    placeholder="Enter your email"
                    color="black"
                    backgroundColor="var(--light-color)"
                    labelColor="white"
                    labelBackgroundColor="var(--yellow-color)"
                    type="email"
                />
            </Box>
            {isOpen && (
                <CodeBlock code={style7}/>
            )}
        </Box>
    );
});

export default Style7;