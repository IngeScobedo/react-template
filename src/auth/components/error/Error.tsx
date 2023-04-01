import { Grid, Typography } from '@mui/material'

export interface Props {
  errorMessage: string
}

const Error = ({ errorMessage }: Props) => {
  return (
    <Grid item xs={12}>
      <Typography sx={{ textAlign: 'center' }}>{errorMessage}</Typography>
    </Grid>
  )
}

export default Error
