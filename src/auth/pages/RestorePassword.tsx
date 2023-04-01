import { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate, useSearchParams } from 'react-router-dom'

import { AuthLayout } from '../layout/'
import { Input, Button } from '../../ui/'
import { useRestorePasswordMutation } from '../../store/auth'
import { checkMutationError } from '../utils/'
import {
  RestorePasswordInputs,
  RestorePasswordInputsErrors,
} from '../interfaces'
import { resetPasswordOptions } from '.'

const RestorePassword = () => {
  const navigate = useNavigate()
  const [inputErrors, setInputErrors] = useState<RestorePasswordInputsErrors>(
    {}
  )
  const [resetPassword] = useRestorePasswordMutation()
  const [urlSearchParams] = useSearchParams()
  const { token } = Object.fromEntries([...urlSearchParams])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RestorePasswordInputs>(resetPasswordOptions)

  const onSubmit: SubmitHandler<RestorePasswordInputs> = async (
    data
  ): Promise<void> => {
    console.log(data, errors)
    await resetPassword({
      password: data.password,
      token,
    })
      .unwrap()
      .then((res) => console.log(res))
      .catch((err) => {
        const errors = checkMutationError(err)
        setInputErrors(errors)
      })
  }

  const handleInputError = (name: keyof RestorePasswordInputs) => {
    const error = errors[name]
    if (error) {
      return error.message
    }
    return inputErrors[name]
  }

  useEffect(() => {
    if (!token) {
      navigate('/auth/login', { replace: true })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token])

  return (
    <AuthLayout
      title="Restablecer Contraseña"
      description="Establece tu nueva contraseña y guárdala en un lugar seguro."
    >
      <form id="login-form" onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Input
            type="password"
            label="Nueva contraseña"
            placeholder="Ingresar nueva contraseña"
            errorMessage={handleInputError('password')}
            {...register('password')}
          />
          <Input
            type="password"
            label="Confirmar contraseña"
            placeholder="Confirmar contraseña"
            errorMessage={handleInputError('confirmPassword')}
            {...register('confirmPassword')}
          />

          <Button
            sx={{ mt: 2 }}
            variant="contained"
            fullWidth
            type="submit"
            form="login-form"
          >
            Restablecer contraseña
          </Button>
        </Grid>
      </form>
    </AuthLayout>
  )
}

export default RestorePassword
