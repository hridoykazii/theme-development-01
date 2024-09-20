// ** React Import
import { forwardRef } from 'react'

// ** MUI Imports
import { useTheme } from '@mui/material'
import TextField from '@mui/material/TextField'

const CustomTextField = forwardRef((props, ref) => {
  // ** Props
  const { size = 'small', InputLabelProps, variant = 'outlined', ...rest } = props
  const theme = useTheme();

  // Size-based styling
  const sizeStyles = {
    small: {
      fontSize: '14px',
      padding: '5px 10px',
      height: '25px',
    },
    medium: {
      fontSize: '16px',
      padding: '8px 16px !important',
      height: '45px',
      borderRadius: '10px'
    },
    large: {
      fontSize: '22px',
      padding: '7px 20px !important',
      height: '56px',
      borderRadius: '12px'
    },
  };

  return (
    <TextField
      size={size}
      inputRef={ref}
      {...rest}
      variant="filled"
      InputLabelProps={{ ...InputLabelProps, shrink: true }}
      sx={{
        alignItems: 'flex-start',
        '& .MuiInputLabel-root': {
          transform: 'none',
          lineHeight: 1.154,
          position: 'relative',
          marginBottom: '5px',
          fontSize: sizeStyles[size].fontSize,
          color: theme.palette.text.default,
          '&.Mui-focused': {
            color: theme.palette.text.white // Change this to the color you want
          }
        },
        '& .MuiInputBase-root': {
          borderRadius: sizeStyles[size].borderRadius,
          backgroundColor: 'transparent !important',
          border: variant === 'outlined' ? `1px solid ${theme.palette.primary.border}` : 'none',
          transition: 'border-color 200ms, box-shadow 200ms',

          '&:not(.Mui-focused):not(.Mui-disabled):not(.Mui-error):hover': {
            borderColor: theme.palette.primary.border2
          },
          '&:before, &:after': {
            display: 'none'
          },
          '&.MuiInputBase-sizeSmall': {
            borderRadius: '10px'
          },
          '&.MuiInputBase-sizeLarge': {
            borderRadius: '15px'
          },
          '&.Mui-error': {
            borderColor: '#f44336'
          },
          '&.Mui-focused': {
            boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.2)',

            // Placeholder transformation on focus
            '& .MuiInputBase-input:not(.MuiInputBase-readOnly):not([readonly])::placeholder': {
              transform: 'translateX(4px)',
            },

            // These specific color variants will override the default color
            '&.MuiInputBase-colorPrimary': {
              borderColor: 'rgba(90, 74, 210, 1)', // Primary variant border color
            },
            '&.MuiInputBase-colorSecondary': {
              borderColor: 'rgba(146, 118, 241, 1)', // Secondary variant border color
            },
            '&.MuiInputBase-colorInfo': {
              borderColor: '#0288d1', // Info variant border color
            },
            '&.MuiInputBase-colorSuccess': {
              borderColor: '#2e7d32', // Success variant border color
            },
            '&.MuiInputBase-colorWarning': {
              borderColor: '#ed6c02', // Warning variant border color
            },
            '&.MuiInputBase-colorError': {
              borderColor: '#d32f2f', // Error variant border color
            },
            '&.Mui-error': {
              borderColor: '#d32f2f', // Error border color when focused
            },
          },
          '&.Mui-disabled': {
            cursor: 'not-allowed',
            backgroundColor: 'transparent !important'
          },
          '& .MuiInputAdornment-root': {
            marginTop: '0 !important'
          },
        },
        '& .MuiInputBase-input': {
          ...sizeStyles[size], // Apply input size styles
          color: theme.palette.text.white, 
          borderRadius: sizeStyles[size].borderRadius,
          '&:not(textarea)': {
            padding: '15.5px 13px'
          },
          '&:not(textarea).MuiInputBase-inputSizeSmall': {
            padding: '7.5px 13px'
          },
          '&:not(.MuiInputBase-readOnly):not([readonly])::placeholder': {
            color: 'gray', // Default placeholder color
            transition: 'opacity 200ms, transform 200ms'
          },
          '&.MuiInputBase-inputAdornedStart:not(.MuiAutocomplete-input)': {
            paddingLeft: 0
          },
          '&.MuiInputBase-inputAdornedEnd:not(.MuiAutocomplete-input)': {
            paddingRight: 0
          },
          '&.Mui-focused': {
            color: 'blue', // Text color when focused
            '&::placeholder': {
              color: 'lightgray', // Placeholder color when focused
              opacity: 1, // Ensures the placeholder color is fully visible
            }
          },
        },


        '& .MuiFormHelperText-root': {
          lineHeight: 1.154,
          margin: '8px 0 0',
          color: 'red',
          fontSize: '0.75rem',
          '&.Mui-error': {
            color: '#f44336'
          }
        },
        '& .MuiSelect-select:focus, & .MuiNativeSelect-select:focus': {
          backgroundColor: 'transparent'
        },
        '& .MuiSelect-filled .MuiChip-root': {
          height: 22
        },
        '& .MuiAutocomplete-input': {
          paddingLeft: '6px !important',
          paddingTop: '7.5px !important',
          paddingBottom: '7.5px !important',
          '&.MuiInputBase-inputSizeSmall': {
            paddingLeft: '6px !important',
            paddingTop: '2.5px !important',
            paddingBottom: '2.5px !important'
          }
        },
        '& .MuiAutocomplete-inputRoot': {
          paddingTop: '8px !important',
          paddingLeft: '8px !important',
          paddingBottom: '8px !important',
          '&:not(.MuiInputBase-sizeSmall).MuiInputBase-adornedStart': {
            paddingLeft: '13px !important'
          },
          '&.MuiInputBase-sizeSmall': {
            paddingTop: '5px !important',
            paddingLeft: '5px !important',
            paddingBottom: '5px !important',
            '& .MuiAutocomplete-tag': {
              margin: 2,
              height: 22
            }
          }
        },
        '& .MuiInputBase-multiline': {
          padding: '15.25px 13px',
          '&.MuiInputBase-sizeSmall': {
            padding: '7.25px 13px'
          },
          '& textarea.MuiInputBase-inputSizeSmall:placeholder-shown': {
            overflowX: 'hidden'
          }
        },
        '& + .react-datepicker__close-icon': {
          top: 11,
          '&:after': {
            fontSize: '1.6rem !important'
          }
        }
      }}
    />
  )
})

export default CustomTextField
