import { BrowserRouter } from 'react-router-dom'
import NotesAppRouter from './router/NotesAppRouter'
import { AppTheme } from './theme'
const NotesApp = () => {

  return (
    <BrowserRouter>
      <AppTheme>
        <NotesAppRouter />
      </AppTheme>
    </BrowserRouter>
  )
}

export default NotesApp