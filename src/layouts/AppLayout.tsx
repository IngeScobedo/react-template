import { ReactNode } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'

export type Props = {
  children: ReactNode
}

export const AppLayout = (Component: JSX.Element, idName: string) => {
  return (
    <div id={idName} className="w-screen h-screen relative">
      {/* bototn de ayuda */}
      <Dropdown className="absolute top-5 right-5">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          REPORTAR PROBLEMA EN LA PLATAFORMA
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default AppLayout
