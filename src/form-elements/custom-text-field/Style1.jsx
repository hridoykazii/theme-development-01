import { Box } from '@mui/material';
import { style1 } from 'common/code/customTextField';
import CodeBlock from 'components/Test/CodeBlock';
import { memo } from 'react';
import TextFieldStyle1 from './TextFieldStyle1';

const Style1 = memo(({isOpen}) => {
    return (
        <Box>
            <Box className="flex justify-start items-center pb-3">
                <TextFieldStyle1
                    label="Name"
                    placeholder="Enter your best name"
                    type="text"
                />
                <TextFieldStyle1
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
                <CodeBlock code={style1}/>
            )}
        </Box>
    );
});

export default Style1;