import { Button, Grid, Typography } from '@mui/material'
import { BiStar } from 'react-icons/bi'
import {
  FiMessageSquare,
  FiCheckSquare,
  FiCalendar,
  FiPower,
} from 'react-icons/fi'
import { MdOutlineMailOutline } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../../store/auth/AuthSlice'
import { RootState } from '../../../store/store'

const Navbar = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((state: RootState) => state.auth)
  const handleLogout = (): void => {
    dispatch(logout({}))
  }

  return (
    <Grid
      container
      sx={{
        width: '100%',
        height: '62px',
        borderRadius: '6px',
        backgroundColor: 'white',
        alignItems: 'center',
        padding: '20px',
        justifyContent: 'space-between',
      }}
    >
      {/* icons */}
      <Grid item sx={{ gap: '14px', display: 'flex' }}>
        <FiCheckSquare color="#6E6B7B" size={20} />
        <FiMessageSquare color="#6E6B7B" size={20} />
        <MdOutlineMailOutline color="#6E6B7B" size={20} />
        <FiCalendar color="#6E6B7B" size={20} />
        <BiStar color="#FF9F43" size={20} />
      </Grid>

      {/* user and logout */}
      <Grid item sx={{ alignItems: 'center', display: 'flex', gap: '20px' }}>
        <Typography variant="navbarUserLabel">{user?.name}</Typography>
        <Button onClick={handleLogout}>
          <FiPower color="#6E6B7B" size={24} />
        </Button>
      </Grid>
    </Grid>
  )
}

export default Navbar
