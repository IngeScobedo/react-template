import { Grid } from '@mui/material'
import { Button } from '../../ui/components'
import { Navbar } from '../components'

import { MdOutlineAddCircleOutline } from 'react-icons/md'

const Home = () => {
  return (
    <Grid sx={{ backgroundColor: 'background', padding: '15px 28px' }}>
      {/* NAVBAR */}
      <Navbar />

      {/* BUTTON: ADD NOTE */}
      <Grid>
        <Button startIcon={<MdOutlineAddCircleOutline />}>Agregar Nota</Button>
      </Grid>

      {/* NOTES LIST */}
    </Grid>
  )
}

export default Home
