import { Grid, Link } from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom'
import { Form } from '../components'
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
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Input
          label="Correo electrónico"
          placeholder="Ingresa tu correo electrónico"
          type="email"
          {...register('email', {
            required: true,
            pattern: {
              value: inputsValidators.email,
              message: 'Esto no es un correo válido',
            },
          })}
        />
        <Form.Button type="submit" variant="contained" fullWidth>
          Enviar Instrucciones
        </Form.Button>
        <Grid item xs={12}>
          <Link
            underline="hover"
            align="center"
            variant="link"
            to={'/auth/login'}
            component={NavLink}
          >
            ¿Olvidaste tu contraseña?
          </Link>
        </Grid>
      </Form>
    </AuthLayout>
  )
}

export default RecoverPassword
