import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from '../pages'

const NotesRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<Navigate to={'/'} />} />
    </Routes>
  )
}

export default NotesRoutes
