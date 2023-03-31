import Button from './button/Button'
import Input from './input/Input'

export { default as Button } from './button/Button'
export { default as Input } from './input/Input'

export type { Props as ButtonProps } from './button/Button'
export type { Props as FormProps } from './form/Form'
export type { Props as InputProps } from './input/Input'

import { Form as FormHOC } from './form/Form'

export const Form = Object.assign(FormHOC, {
  Input: Input,
  Button: Button,
})
