import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { inputsValidators } from '../utils'

export { default as Login } from './Login'
export { default as RecoverPassword } from './RecoverPassword'
export { default as RestorePassword } from './RestorePassword'

export const formSchema = Yup.object().shape({
  password: Yup.string()
    .required('La contraseña es requerida')
    .matches(
      inputsValidators.password,
      'La contraseña debe tener al menos 8 caracteres, caracteres especiales, letras mayúsculas y minúsculas.'
    ),
  confirmPassword: Yup.string()
    .required('Confirma la contraseña')
    .oneOf([Yup.ref('password')], 'Las contraseñas no coinciden.'),
})
export const resetPasswordOptions = { resolver: yupResolver(formSchema) }
