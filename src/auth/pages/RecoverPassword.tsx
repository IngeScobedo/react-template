import { useState } from 'react'
import { Grid, Link } from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom'

import { useRecoverPasswordMutation } from '../../store/auth/'
import { Input, Button } from '../../ui'
import { AuthLayout } from '../layout'
import { checkMutationError, inputsValidators } from '../utils'
import { RecoverPasswordInputs } from '../interfaces'

const RecoverPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RecoverPasswordInputs>()
  const navigate = useNavigate()
  const [mutationError, setMutationError] = useState('')
  const [recover] = useRecoverPasswordMutation()

  const onSubmit: SubmitHandler<RecoverPasswordInputs> = async (
    data
  ): Promise<void> => {
    console.log(data, errors)
    await recover(data)
      .unwrap()
      .then(({ token }) => navigate(`/auth/restore?token=${token}`))
      .catch((err) => {
        const { email } = checkMutationError(err)
        email && setMutationError(email)
      })
  }

  const handleInputError = (name: keyof RecoverPasswordInputs) => {
    const error = errors[name]
    if (error) {
      return error.message
    }
    return mutationError
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
            errorMessage={handleInputError('email')}
            {...register('email', {
              required: true,
              pattern: {
                value: inputsValidators.email,
                message: 'Ingresa un correo electrónico válido.',
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
