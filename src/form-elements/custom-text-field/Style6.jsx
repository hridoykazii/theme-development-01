import { Box } from '@mui/material';
import { style6 } from 'common/code/customTextField';
import CodeBlock from 'components/Test/CodeBlock';
import { memo } from 'react';
import TextFieldStyle6 from './TextFieldStyle6';

const Style6 = memo(({isOpen}) => {
    return (
        <Box>
            <Box className="flex justify-start items-center pb-3">
                <TextFieldStyle6
                    label="Name"
                    placeholder="Enter your name"
                    type="text"
                />
                <TextFieldStyle6
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
                <CodeBlock code={style6}/>
            )}
        </Box>
    );
});

export default Style6;