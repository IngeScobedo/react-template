import { ButtonProps, Button as MButton, Grid } from '@mui/material'
import { ReactNode } from 'react'

export interface Props extends ButtonProps {
  children: ReactNode
}

const Button = ({ children, variant, ...props }: Props) => {
  return (
    <Grid item xs={12}>
      <MButton
        variant={variant}
        sx={{
          fontWeight: variant === 'contained' ? '500' : '400',
          fontSize: '14px',
        }}
        {...props}
      >
        {children}
      </MButton>
    </Grid>
  )
}

export default Button
