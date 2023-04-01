import { useState } from 'react'
import { Grid, Link } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useForm, SubmitHandler } from 'react-hook-form'

import { AuthLayout } from '../layout'
import { Button, Input } from '../../ui'
import { inputsValidators, checkMutationError } from '../utils'
import { login, useLoginMutation } from '../../store/auth/'
import { useAppSelector } from '../../store/'
import { Error } from '../components'
import { LoginInputErrors, LoginInputs } from '../interfaces'

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>()

  const dispatch = useDispatch()
  const { errorMessage } = useAppSelector((state) => state.auth)
  const [userLogin, { isLoading }] = useLoginMutation()
  const [inputsErrors, setInputsErrors] = useState<LoginInputErrors>({})

  const onSubmit: SubmitHandler<LoginInputs> = async (
    data: LoginInputs
  ): Promise<void> => {
    // ! mover logica
    await userLogin(data)
      .unwrap()
      .then((data) => dispatch(login(data.user)))
      .catch((err) => {
        handleMutationError(err)
      })
  }

  const handleMutationError = (err: unknown) => {
    const errors = checkMutationError(err)
    setInputsErrors(errors)
  }

  const handleInputError = (name: keyof LoginInputs) => {
    const error = errors[name]
    if (error) {
      return error.message
    }
    return inputsErrors[name]
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
            {...register('email', {
              required: true,
              pattern: {
                value: inputsValidators.email,
                message: 'Ingresa un correo electrónico válido.',
              },
            })}
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
            {...register('password', {
              required: true,
            })}
          />

          {errorMessage && <Error>{errorMessage}</Error>}

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
