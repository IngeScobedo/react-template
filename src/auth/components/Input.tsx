import { Input as MInput } from '@mui/material'

import { ReactNode, HTMLAttributes } from 'react'

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  label: string
  variant: 'primary' | 'secondary'
}

const Input = ({ variant, ...props }: Props) => {
  return <MInput {...props} sx={{ width: '25ch' }} />
}

export default Input
