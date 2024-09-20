import { Box } from '@mui/material';
import { style8 } from 'common/code/customTextField';
import CodeBlock from 'components/Test/CodeBlock';
import { memo } from 'react';
import TextFieldStyle8 from './TextFieldStyle8';

const Style8 = memo(({isOpen}) => {
    return (
        <Box>
            <Box className="flex justify-start items-center pb-3">
                <TextFieldStyle8
                    label="Name"
                    placeholder="Enter your name"
                    type="text"
                />
                <TextFieldStyle8
                    label="Email"
                    placeholder="Enter your email"
                    color="black"
                    backgroundColor="var(--light-color)"
                    labelColor="black"
                    labelBackgroundColor="var(--yellow-color)"
                    type="email"
                />
            </Box>
            {isOpen && (
                <CodeBlock code={style8}/>
            )}
        </Box>
    );
});

export default Style8;