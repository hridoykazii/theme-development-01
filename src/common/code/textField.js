export const customTextField = `
import { memo } from 'react';
import CustomTextField from './CustomTextField';

const TextFieldCustom = memo(() => {
    return (
        <CustomTextField label="Default"/>
    );
});

export default TextFieldCustom;
`

export const textFieldSizes = `
import { Box } from '@mui/material';
import { memo } from 'react';
import CustomTextField from './CustomTextField';

const TextFieldSizes = memo(() => {
    return (
        <Box className='flex justify-between items-center'>
            <CustomTextField size='small' label='Small' placeholder='Size'/>
            <CustomTextField size='medium' label='Medium' placeholder='Size'/>
            <CustomTextField size='large' label='Large' placeholder='Size'/>
        </Box>
    );
});

export default TextFieldSizes;
`

export const textFieldColor = `
import { Box } from '@mui/material';
import { memo } from 'react';
import CustomTextField from './CustomTextField';

const TextFieldColor = memo(() => {
    return (
        <Box className="flex justify-between items-center">
            <CustomTextField label='Secondary' color='secondary'/>
            <CustomTextField label='Success' color='success'/>
            <CustomTextField label='Error' color='error'/>
            <CustomTextField label='Warning' color='warning'/>
            <CustomTextField label='Info' color='info'/>
        </Box>
    );
});

export default TextFieldColor;
`

export const textFieldInputAdronment = `
// ** React Imports
import { useState } from 'react';

// ** MUI Imports
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import CustomTextField from './CustomTextField';


const TextFieldInputAdornment = () => {
  // ** State
  const [values, setValues] = useState({
    weight: '',
    password: '',
    showPassword: false
  })

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  return (
    <form className='demo-space-x flex justify-start items-center gap-5' noValidate autoComplete='off'>
      <CustomTextField
        id='icons-start-adornment'
        label='With normal TextField'
        InputProps={{
          startAdornment: <InputAdornment position='start'>Kg</InputAdornment>
        }}
      />
      <CustomTextField
        label='Password'
        value={values.password}
        id='icons-adornment-password'
        onChange={handleChange('password')}
        type={values.showPassword ? 'text' : 'password'}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton
                edge='end'
                onClick={handleClickShowPassword}
                onMouseDown={e => e.preventDefault()}
                aria-label='toggle password visibility'
              >
                {values.showPassword ? <VisibilityIcon fontSize='small' sx={{color: 'var(--icon-color)'}} /> : <VisibilityOffIcon fontSize='small' sx={{color: 'var(--icon-color)'}} />}
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    </form>
  )
}

export default TextFieldInputAdornment
`
export const textFieldVariant = `
// ** MUI Imports
import { Box } from '@mui/material'
import TextField from '@mui/material/TextField'

import TextFieldFilled from './TextFieldFilled'
import TextFieldOutlined from './TextFieldOutlined'
import TextFieldStandard from './TextFieldStandard'

const TextFieldVariant = () => {
  return (
    <Box className="flex justify-start gap-5">
      <TextField id='outlined-basic' label='Outlined' />
      <TextField id='filled-basic' label='Filled' variant='filled' />
      <TextField id='standard-basic' label='Standard' variant='standard' />
    </Box>
    <Box className="flex justify-start gap-5 mt-5">
        <TextFieldOutlined color="success" placeholder="Enter text" label="Custom Field" />
        <TextFieldFilled color="secondary" placeholder="Enter text" label="Custom Field" />
        <TextFieldStandard color="secondary" placeholder="Enter text" label="Custom Field" />
    </Box>
  )
}

export default TextFieldVariant
`

export const textFieldValidation = `
import { Box } from "@mui/material"
import CustomTextField from "./CustomTextField"

const TextFieldValidation = () => {
  return (
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
  )
}

export default TextFieldValidation
`