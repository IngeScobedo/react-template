import { Navigate, Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import RecoverPassword from '../pages/RecoverPassword'

const AuthRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="recovery" element={<RecoverPassword />} />
        <Route path="/*" element={<Navigate to={'login'} />} />
      </Routes>
    </>
  )
}

export default AuthRoutes
