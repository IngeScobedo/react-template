import { Navigate, Route, Routes } from 'react-router-dom'
import AuthRoutes from '../auth/routes/AuthRoutes'
import NotesRoutes from '../notes/routes/NotesRoutes'
import { useAppSelector } from '../store/hooks'

const NotesAppRouter = () => {
  const { status } = useAppSelector((store) => store.auth)
  return (
    <Routes>
      {status === 'authenticated' ? (
        <Route path="/*" element={<NotesRoutes />} />
      ) : (
        <Route path="/auth/*" element={<AuthRoutes />} />
      )}
      <Route path="/*" element={<Navigate to="/auth" />} />
    </Routes>
  )
}

export default NotesAppRouter
