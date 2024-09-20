// ** React Imports
import { useState } from 'react';

// ** MUI Imports
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import { textFieldInputAdronment } from 'common/code/textField';
import CodeBlock from 'components/Test/CodeBlock';
import CustomTextField from './CustomTextField';


const TextFieldInputAdornment = ({isOpen}) => {
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
    <Box>
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
      {isOpen && (
        <CodeBlock code={textFieldInputAdronment}/>
      )}
    </Box>
  )
}

export default TextFieldInputAdornment
