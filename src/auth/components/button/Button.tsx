import { ButtonProps, Button as MButton, Grid } from '@mui/material'
import { ReactNode } from 'react'

export interface Props extends ButtonProps {
  children: ReactNode
}

const Button = ({ children, ...props }: Props) => {
  return (
    <Grid item xs={12}>
      <MButton {...props}>{children}</MButton>
    </Grid>
  )
}

export default Button
