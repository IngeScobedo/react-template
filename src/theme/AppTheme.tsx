import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles/'
import { ReactNode } from 'react'
import blueTheme from './blueTheme'

interface Props {
  children: ReactNode
}

const AppTheme = ({ children }: Props) => {
  return (
    <ThemeProvider theme={blueTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export default AppTheme
