import { Grid, Link } from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom'
import { Input, Button } from '../../ui/components'
import AuthLayout from '../layout/AuthLayout'
import { inputsValidators } from '../utils/validators'

type Inputs = {
  email: string
}

const RecoverPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data): void => {
    console.log(data, errors)
  }

  return (
    <AuthLayout
      title="¿Olvidaste tu Contraseña?"
      description="Ingresa tu correo electrónico y te enviaremos instrucciones para restablecer tu contraseña."
    >
      <form id="login-form" onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Input
            label="Correo electrónico"
            placeholder="Ingresa tu correo electrónico"
            type="email"
            errorMessage={errors.email && errors.email.message}
            {...register('email', {
              required: true,
              pattern: {
                value: inputsValidators.email,
                message: 'Esto no es un correo válido',
              },
            })}
          />
          <Button type="submit" variant="contained" fullWidth>
            Enviar Instrucciones
          </Button>
          <Grid item xs={12} sx={{ textAlign: 'center' }}>
            <Link
              underline="hover"
              align="center"
              variant="buttonLink"
              to={'/auth/login'}
              component={NavLink}
            >
              Regresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}

export default RecoverPassword
