import { createTheme } from '@mui/material'

const blueTheme = createTheme({
  palette: {
    primary: {
      main: '#262254'
    },
    secondary: {
      main: '#543884'
    },
    error: {
      main: '#543884'
    }
  },
  typography: {
    h1: {
      fontSize: '18px' 
    },
    h2: {
      fontSize: '16px'
    },
    h3: {
      fontSize: '15px'
    },
    body1: {
      fontSize: '14px'
    },
    body2: {
      fontSize: '12px'
    }
  }
})

export default blueTheme
