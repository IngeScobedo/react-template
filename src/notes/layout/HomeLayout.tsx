import { Grid } from '@mui/material'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const HomeLayout = ({ children }: Props) => {
  return (
    <Grid
      sx={{
        display: 'flex',
        flexDirection: 'column',
        rowGap: '30px',
        backgroundColor: 'background',
        padding: '15px 28px',
      }}
    >
      {children}
    </Grid>
  )
}

export default HomeLayout
