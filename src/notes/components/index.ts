import { Button } from '../../ui'
import { Props as ModalProps } from './modal/Modal'
import { Props as ButtonProps } from '../../ui/components/button/Button'
export { default as Navbar } from './navbar/Navbar'
// export { default as Modal } from './modal/Modal'

export interface ModalHOCProps {
  ({ modalTitle, buttonVariant }: ModalProps): JSX.Element
  Button: (props: ButtonProps) => JSX.Element
}

import { Modal as ModalHOC } from './modal/Modal'

export const Modal: ModalHOCProps = Object.assign(ModalHOC, {
  Button: Button,
})

export default Modal
