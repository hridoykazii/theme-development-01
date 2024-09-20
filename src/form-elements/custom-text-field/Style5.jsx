import { Box } from '@mui/material';
import { style5 } from 'common/code/customTextField';
import CodeBlock from 'components/Test/CodeBlock';
import { memo } from 'react';
import TextFieldStyle5 from './TextFieldStyle5';

const Style5 = memo(({isOpen}) => {
    return (
        <Box>
            <Box className="flex justify-start items-center pb-3">
                <TextFieldStyle5
                    label="Name"
                    placeholder="Enter your name"
                    type="text"
                />
                <TextFieldStyle5
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
                <CodeBlock code={style5}/>
            )}
        </Box>
    );
});

export default Style5;