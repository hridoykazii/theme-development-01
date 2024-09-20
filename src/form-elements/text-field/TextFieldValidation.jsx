import { Box } from "@mui/material"
import { textFieldValidation } from "common/code/textField"
import CodeBlock from "components/Test/CodeBlock"
import CustomTextField from "./CustomTextField"

const TextFieldValidation = ({isOpen}) => {
  return (
    <Box>
        <Box className="flex justify-start gap-5">
            <CustomTextField error id='validation-error' label='Error' defaultValue='Hello World' />
            <CustomTextField
                error
                label='Error'
                defaultValue='Hello World'
                helperText='Incorrect entry.'
                id='validation-error-helper-text'
            />
        </Box>
        {isOpen && (
            <CodeBlock code={textFieldValidation}/>
        )}
    </Box>
  )
}

export default TextFieldValidation
