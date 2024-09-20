import { Box } from '@mui/material';
import { style3 } from 'common/code/customTextField';
import CodeBlock from 'components/Test/CodeBlock';
import { memo } from 'react';
import TextFieldStyle3 from './TextFieldStyle3';

const Style3 = memo(({isOpen}) => {
    return (
        <Box>
            <Box className="flex justify-start items-center pb-3">
                <TextFieldStyle3
                    label="Name"
                    placeholder="Enter your name"
                    type="text"
                />
                <TextFieldStyle3
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
                <CodeBlock code={style3}/>
            )}
        </Box>
    );
});

export default Style3;