import { Route, Routes } from 'react-router-dom'
import Login from '../auth/pages/Login'
import AuthRoutes from '../auth/routes/AuthRoutes'
import { useCheckAuth } from '../hooks/useCheckAuth'
import { CheckingAuth } from '../ui/components/CheckingAuth'

const NotesAppRouter = () => {
  const status = useCheckAuth()

  // if (status === 'checking') {
  //   return (<CheckingAuth />)
  // }
  return (
    <Routes>
      <Route path="/*" element={<Login />} />
      <Route path="/auth/*" element={<AuthRoutes />} />
    </Routes>
  )
}

export default NotesAppRouter
