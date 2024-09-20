import { Box } from '@mui/material';
import { style4 } from 'common/code/customTextField';
import CodeBlock from 'components/Test/CodeBlock';
import { memo } from 'react';
import TextFieldStyle4 from './TextFieldStyle4';

const Style4 = memo(({isOpen}) => {
    return (
        <Box>
            <Box className="flex justify-start items-center pb-3">
                <TextFieldStyle4
                    label="Name"
                    placeholder="Enter your name"
                    type="text"
                />
                <TextFieldStyle4
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
                <CodeBlock code={style4}/>
            )}
        </Box>
    );
});

export default Style4;