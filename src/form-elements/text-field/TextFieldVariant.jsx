// ** MUI Imports
import { Box, Typography, useTheme } from '@mui/material'
import TextField from '@mui/material/TextField'
import { textFieldVariant } from 'common/code/textField'
import CodeBlock from 'components/Test/CodeBlock'
import TextFieldFilled from './TextFieldFilled'
import TextFieldOutlined from './TextFieldOutlined'
import TextFieldStandard from './TextFieldStandard'

const TextFieldVariant = ({isOpen}) => {
  const theme = useTheme();
  return (
    <Box>
        <Box className="flex justify-start gap-5">
            <TextField id='outlined-basic' label='Outlined' />
            <TextField id='filled-basic' label='Filled' variant='filled' />
            <TextField id='standard-basic' label='Standard' variant='standard' />
        </Box>
        <Box>
            <Typography
              className="!text-xl pb-3 pt-5"
              sx={{ color: theme.palette.text.white }}
            >
              Custom Variant
            </Typography>
            <Typography sx={{ color: theme.palette.text.semiWhite }}>
              Use <code>TextFieldOutlined</code> component for <code>variant='outlined'</code> text fields.Same as <code>TextFieldFilled</code> component for <code>variant='filled'</code> text field and 
              <code>TextFiledStandard</code> component for <code>variant='standard'</code> text field.
            </Typography>
        </Box>
        <Box className="flex justify-start gap-5 mt-5">
            <TextFieldOutlined color="success" placeholder="Enter text" label="Custom Field" />
            <TextFieldFilled color="secondary" placeholder="Enter text" label="Custom Field" />
            <TextFieldStandard color="secondary" placeholder="Enter text" label="Custom Field" />
        </Box>
        {isOpen && (
            <CodeBlock code={textFieldVariant}/>
        )}
    </Box>
  )
}

export default TextFieldVariant
