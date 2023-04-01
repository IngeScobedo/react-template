import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { inputsValidators } from '../utils'

export { default as Login } from './login/Login'
export { default as RecoverPassword } from './RecoverPassword'
export { default as RestorePassword } from './RestorePassword'

export const LoginFormSchema = Yup.object().shape({
  email: Yup.string()
    .required('El correo electrónico es requerido')
    .matches(inputsValidators.email, 'Ingresa un correo electrónico válido.'),
  password: Yup.string().required('La contraseña es requerida'),
})

export const RecoveryFormSchema = Yup.object().shape({
  email: Yup.string()
    .required('El correo electrónico es requerido')
    .matches(inputsValidators.email, 'Ingresa un correo electrónico válido.'),
})

export const ResetPasswordFormSchema = Yup.object().shape({
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

export const LoginFormOptions = {
  resolver: yupResolver(LoginFormSchema),
}

export const RecoveryFormOptions = {
  resolver: yupResolver(RecoveryFormSchema),
}

export const resetPasswordFormOptions = {
  resolver: yupResolver(ResetPasswordFormSchema),
}
