import { Grid } from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Input, Button } from '../../ui/components'
import AuthLayout from '../layout/AuthLayout'
import { inputsValidators } from '../utils/validators'

type Inputs = {
  password: string
  confirmPassword: string
}

const RestorePassword = () => {
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
      title="Restablecer Contraseña"
      description="Establece tu nueva contraseña y guárdala en un lugar seguro."
    >
      <form id="login-form" onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Input
            type="password"
            label="Nueva contraseña"
            placeholder="Ingresar nueva contraseña"
            errorMessage={errors.password && errors.password.message}
            {...register('password', {
              required: true,
              pattern: {
                value: inputsValidators.password,
                message: 'El correo o la contraseña son invalidos',
              },
            })}
          />
          <Input
            type="password"
            label="Confirmar contraseña"
            placeholder="Confirmar contraseña"
            errorMessage={
              errors.confirmPassword && errors.confirmPassword.message
            }
            {...register('confirmPassword', {
              required: true,
              pattern: {
                value: inputsValidators.password,
                message: 'El correo o la contraseña son invalidos',
              },
            })}
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
