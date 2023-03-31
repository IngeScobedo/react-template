import { useDispatch, useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import AuthRoutes from '../auth/routes/AuthRoutes'
import NotesRoutes from '../notes/routes/NotesRoutes'
import { CheckingAuth } from '../ui/components/CheckingAuth'

const NotesAppRouter = () => {
  const dispatch = useDispatch()
  const { status } = useSelector((state: RootState) => state.auth)

  if (status === 'checking') {
    return <CheckingAuth />
  }

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
