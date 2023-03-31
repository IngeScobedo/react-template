/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Grid, Input as MInput, InputProps, Typography } from '@mui/material'
import { SxProps, Theme } from '@mui/material/styles'
import { InputLabel } from '@mui/material'
import { FC, forwardRef, useContext } from 'react'

import './Input.scss'

export interface Props extends InputProps {
  label?: string
  variant?: 'primary' | 'password' | 'email' | 'note-title'
  errorMessage?: string
  OptionalComponent?: FC
}

export type StylesProps<T extends Theme> = SxProps<T> & {
  '&::placeholder'?: string
}

// eslint-disable-next-line react/display-name
const Input = forwardRef(
  (
    {
      variant = 'primary',
      placeholder = '',
      label = '',
      id,
      errorMessage = '',
      OptionalComponent,
      ...props
    }: Props,
    ref
  ) => {
    const isTextInput = variant === 'primary' || variant === 'note-title'
    const typeOfInput = isTextInput ? 'text' : variant
    const inputSx = {
      border: 'none',
      color: 'text.primary',
      fontSize: 'body2',
      input: {
        '&::placeholder': {
          color: 'placeholderColor',
          fontSize: 'body2',
        },
      },
      '&::before': {
        border: 'none',
      },
      '&:hover:not(.Mui-disabled, .Mui-error):before': {
        border: 'none',
      },
      '&:after': {
        border: 'none',
      },
      '&.Mui-error input': {
        borderRadius: '5px',
        borderColor: 'error.main',
        borderWidth: '1px',
        borderStyle: 'solid',
        color: 'error.main',
      },
      '&.Mui-error input:-webkit-autofill': {
        color: 'error.main',
      },
    }

    if (variant === 'note-title' && inputSx.input !== null) {
      inputSx.input['&::placeholder'].fontSize = '16px'
    }

    return (
      <Grid item xs={12}>
        <div className="input-wrapper">
          <Grid
            item
            sx={{ display: 'flex', justifyContent: 'space-between' }}
            xs={12}
          >
            <InputLabel
              sx={{ color: 'text.secondary', fontSize: '12px' }}
              htmlFor={id}
            >
              {label}
            </InputLabel>
            {OptionalComponent && <OptionalComponent />}
          </Grid>
          <MInput
            type={typeOfInput}
            error={errorMessage ? true : false}
            ref={ref}
            {...props}
            placeholder={placeholder}
            sx={inputSx}
          />
          <Typography variant="inputError">{errorMessage}</Typography>
        </div>
      </Grid>
    )
  }
)

export default Input
