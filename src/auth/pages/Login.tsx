import { Grid, Link } from '@mui/material'
import { useEffect, useMemo } from 'react'
import AuthLayout from '../layout/AuthLayout'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useForm, SubmitHandler } from 'react-hook-form'
import { RootState } from '../../store/store'
import Input from '../components/input/Input'
import Button from '../components/button/Button'
import { inputsValidators } from '../utils/validators'

type Inputs = {
  email: RegExp
  password: string
}

const Login = () => {
  const { status } = useSelector((state: RootState) => state.auth)

  const isAuthenticating = useMemo(() => status === 'checking', [status])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data): void => {
    console.log(data, errors)
  }

  useEffect(() => {
    console.log('inputs', errors)
  }, [errors])

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
            errorMessage={errors.email && errors.email.message}
            {...register('email', {
              required: true,
              pattern: {
                value: inputsValidators.email,
                message: 'Esto no es un correo válido',
              },
            })}
          />

          <Input
            label="Contraseña"
            variant="password"
            id={'password-input'}
            placeholder="Ingresa contraseña"
            errorMessage={errors.password && errors.password.message}
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
              pattern: {
                value: inputsValidators.password,
                message: 'El correo o la contraseña son invalidos',
              },
            })}
          />
        </Grid>
        <Button variant="contained" fullWidth type="submit" form="login-form">
          Ingresar
        </Button>
      </form>
    </AuthLayout>
  )
}

export default Login
