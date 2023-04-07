import { Navigate, Route, Routes } from 'react-router-dom'
import Boletos from '../pages/Boletos'
import InformacionFacturacion from '../pages/InformacionFacturacion'
import { useAppSelector } from '../store/hooks'

const AppRouter = () => {
  const { confirmacionDeDatos } = useAppSelector((state) => state.user)
  return (
    <Routes>
      {!confirmacionDeDatos ? (
        <>
          <Route path="/" element={<InformacionFacturacion />} />
          <Route path="/*" element={<Navigate to={'/'} />} />
        </>
      ) : (
        <>
          <Route path="/boletos" element={<Boletos />} />
          <Route path="/*" element={<Navigate to={'/boletos'} />} />
        </>
      )}
    </Routes>
  )
}

export default AppRouter
