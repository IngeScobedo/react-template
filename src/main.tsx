import React from 'react'
import ReactDOM from 'react-dom/client'
import NotesApp from './NotesApp'

import './main.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <NotesApp />
  </React.StrictMode>
)
