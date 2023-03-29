import { Grid, Typography } from '@mui/material'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  title: string
  description: string
}

const AuthLayout = ({ children, title, description }: Props) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
    >
      <Grid
        item
        className="box-shadow"
        xs={3}
        sx={{
          backgroundColor: 'white',
          padding: 3,
          borderRadius: 2,
          width: '407px',
          height: '352px',
        }}
      >
        <Typography variant="h1">{title}</Typography>
        <Typography variant="body1">{description}</Typography>

        {children}
      </Grid>
    </Grid>
  )
}

export default AuthLayout
