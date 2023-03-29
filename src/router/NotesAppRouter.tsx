import { Route, Routes } from "react-router-dom"
import AuthLayout from "../auth/pages/AuthLayout"

const NotesAppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<AuthLayout />} />
    </Routes>
  )
}

export default NotesAppRouter