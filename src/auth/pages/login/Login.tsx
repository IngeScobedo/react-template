import { useState } from 'react'
import { Grid, Link } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'

import { AuthLayout } from '../../layout'
import { Button, Input } from '../../../ui'
import { useAppSelector } from '../../../store'
import { Error } from '../../components'
import { LoginInputErrors, LoginInputs } from '../../interfaces'
import { useLoginUser } from '../../hooks'
import { LoginFormOptions } from '..'

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>(LoginFormOptions)

  const [inputErrors, setInputErrors] = useState<LoginInputErrors>({})
  const { loginUser, isLoading } = useLoginUser()
  const { errorMessage } = useAppSelector((state) => state.auth)

  const onSubmit: SubmitHandler<LoginInputs> = async (
    data: LoginInputs
  ): Promise<void> => {
    const { errors: inputErrors } = await loginUser(data)
    setInputErrors(inputErrors)
  }

  const handleInputError = (name: keyof LoginInputs) => {
    const error = errors[name]
    if (error) {
      return error.message
    }
    return inputErrors[name]
  }

  return (
    <AuthLayout
      title="¡Bienvenido de nuevo!"
      description="Ingresa con tu usuario y contraseña para acceder a la plataforma."
    >
      <form id="login-form" onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Input
            label="Correo Electrónico"
            variant="email"
            id={'email-input'}
            placeholder="Ingresa tu Correo Electrónico"
            disabled={isLoading}
            errorMessage={handleInputError('email')}
            {...register('email')}
          />

          <Input
            label="Contraseña"
            variant="password"
            id={'password-input'}
            placeholder="Ingresa contraseña"
            errorMessage={handleInputError('password')}
            disabled={isLoading}
            OptionalComponent={() => (
              <Link
                underline="hover"
                variant="link"
                to={'/auth/recovery'}
                component={NavLink}
              >
                ¿Olvidaste tu contraseña?
              </Link>
            )}
            {...register('password')}
          />

          {errorMessage && <Error errorMessage={errorMessage} />}

          <Button
            disabled={isLoading}
            sx={{ mt: 2 }}
            variant="contained"
            fullWidth
            type="submit"
            form="login-form"
          >
            Ingresar
          </Button>
        </Grid>
      </form>
    </AuthLayout>
  )
}

export default Login
