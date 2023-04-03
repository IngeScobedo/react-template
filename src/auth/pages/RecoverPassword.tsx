import { useState } from 'react'
import { Grid, Link } from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom'

import { Input, Button } from '../../ui'
import { AuthLayout } from '../layout'
import { inputsValidators } from '../utils'
import {
  RecoverPasswordInputs,
  RecoverPasswordInputsErrors,
} from '../interfaces'
import { useRecoverPassword } from '../hooks'

const RecoverPassword = () => {
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm<RecoverPasswordInputs>()
  const { recoverPassword, isLoading } = useRecoverPassword()
  const [inputErrors, setInputErrors] = useState<RecoverPasswordInputsErrors>(
    {}
  )

  const onSubmit: SubmitHandler<RecoverPasswordInputs> = async (
    data
  ): Promise<void> => {
    const { errors: inputErrors } = await recoverPassword(data)
    setInputErrors(inputErrors)
  }

  const handleInputError = (name: keyof RecoverPasswordInputs) => {
    const error = errors[name]
    if (error) {
      setFocus(name)
      return error.message
    }
    setFocus(name)
    return inputErrors[name]
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
            disabled={isLoading}
            autoFocus
            {...register('email', {
              required: true,
              pattern: {
                value: inputsValidators.email,
                message: 'Ingresa un correo electrónico válido.',
              },
            })}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={isLoading}
          >
            Enviar Instrucciones
          </Button>
          {!isLoading && (
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
          )}
        </Grid>
      </form>
    </AuthLayout>
  )
}

export default RecoverPassword
