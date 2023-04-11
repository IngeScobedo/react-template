import Boletos from './pages/Boletos'
import InformacionFacturacion from './pages/InformacionFacturacion'
import { useAppSelector } from './store/hooks'

const FacturacionApp = () => {
  const { user } = useAppSelector((state) => state.user)

  return (
    <div className="flex flex-col">
      <InformacionFacturacion />
      {user && <Boletos />}
    </div>
  )
}

export default FacturacionApp
