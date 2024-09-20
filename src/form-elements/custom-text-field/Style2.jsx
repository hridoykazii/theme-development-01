import { Box } from '@mui/material';
import { style2 } from 'common/code/customTextField';
import CodeBlock from 'components/Test/CodeBlock';
import { memo } from 'react';
import TextFieldStyle2 from './TextFieldStyle2';

const Style2 = memo(({isOpen}) => {
    return (
        <Box>
            <Box className="flex justify-start items-center pb-3">
                <TextFieldStyle2
                    label="Name"
                    placeholder="Enter your best name"
                    type="text"
                />
                <TextFieldStyle2
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
                <CodeBlock code={style2}/>
            )}
        </Box>
    );
});

export default Style2;