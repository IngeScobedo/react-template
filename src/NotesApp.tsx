import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import NotesAppRouter from './router/NotesAppRouter'
import { store } from './store/store'
import { AppTheme } from './theme'
const NotesApp = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppTheme>
          <NotesAppRouter />
        </AppTheme>
      </BrowserRouter>
    </Provider>
  )
}

export default NotesApp
