import { Grid, Typography } from '@mui/material'
import { ReactNode } from 'react'

export interface Props {
  children: ReactNode
}

const Error = ({ children }: Props) => {
  return (
    <Grid item xs={12}>
      <Typography sx={{ textAlign: 'center' }}>{children}</Typography>
    </Grid>
  )
}

export default Error
