import { createTheme } from '@mui/material'

const blueTheme = createTheme({
  palette: {
    primary: {
      main: '#3554D1',
    },
    secondary: {
      main: '#543884',
    },
    error: {
      main: '#543884',
    },
    background: {
      default: '#F8F8F8',
    },
  },
  typography: {
    h1: {
      fontSize: '18px',
      color: '#5E5873',
    },
    h2: {
      fontSize: '16px',
      color: '#B9B9C3',
    },
    h3: {
      fontSize: '15px',
      color: '#5E5873',
    },
    body1: {
      fontSize: '14px',
    },
    body2: {
      fontSize: '12px',
    },
    fontFamily: 'Montserrat',
  },
})

export default blueTheme
