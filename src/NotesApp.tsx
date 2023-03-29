import { BrowserRouter } from 'react-router-dom'
import NotesAppRouter from './router/NotesAppRouter'
const NotesApp = () => {

  return (
    <BrowserRouter>
      <NotesAppRouter />
    </BrowserRouter>
  )
}

export default NotesApp
