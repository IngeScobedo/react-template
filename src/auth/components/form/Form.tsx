import { Grid } from '@mui/material'
import { FormHTMLAttributes, ReactNode } from 'react'

export interface Props extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode
}

const Form = ({ children, ...props }: Props) => {
  return (
    <form {...props}>
      <Grid container spacing={2}>
        {children}
      </Grid>
    </form>
  )
}

export default Form
