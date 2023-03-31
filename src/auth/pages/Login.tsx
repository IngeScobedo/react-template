import { Grid, Link } from '@mui/material'
import { useEffect, useMemo } from 'react'
import AuthLayout from '../layout/AuthLayout'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useForm, SubmitHandler } from 'react-hook-form'
import { RootState } from '../../store/store'
import Input from '../components/input/Input'
import Button from '../components/button/Button'

type Inputs = {
  email: RegExp
  password: string
}

const Login = () => {
  const { status } = useSelector((state: RootState) => state.auth)

  const loginValidators = {
    email: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
    password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
  }

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
      <form onSubmit={handleSubmit(onSubmit)}>
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
                value: loginValidators.email,
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
                value: loginValidators.password,
                message: 'El correo o la contraseña son invalidos',
              },
            })}
          />

          <Button variant="contained" fullWidth type="submit" form="login-form">
            Ingresar
          </Button>
        </Grid>
      </form>
    </AuthLayout>
  )
}

export default Login
