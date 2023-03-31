import { Navigate, Route, Routes } from 'react-router-dom'
import { Login, RecoverPassword, RestorePassword } from '../pages'

const AuthRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="recovery" element={<RecoverPassword />} />
        <Route path="restore" element={<RestorePassword />} />
        <Route path="/*" element={<Navigate to={'login'} />} />
      </Routes>
    </>
  )
}

export default AuthRoutes
