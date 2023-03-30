import {
  Alert,
  Button,
  Grid,
  Input,
  InputLabel,
  Link,
  TextField,
  Typography,
} from '@mui/material'
import { useMemo, useState } from 'react'
import AuthLayout from '../layout/AuthLayout'
import { Link as RouterLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useForm, SubmitHandler } from 'react-hook-form'
import { RootState } from '../../store/store'

type Inputs = {
  email: string
  password: string
}

const Login = () => {
  const dispatch = useDispatch()
  const { status, errorMessage } = useSelector((state: RootState) => state.auth)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const isAuthenticating = useMemo(() => status === 'checking', [status])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data): void => {
    console.log(data)
  }

  return (
    <AuthLayout
      title="¡Bienvenido de nuevo!"
      description="Ingresa con tu usuario y contraseña para acceder a la plataforma."
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <InputLabel htmlFor="email-input">Correo Electrónico</InputLabel>
            {/* <TextField
              id={'email-input'}
              label="Email"
              type="email"
              error={errors.email && formSubmitted}
              helperText={'El correo debe contener @'}
              placeholder="correo@mail.com"
              fullWidth
              {...register('email', { required: true })}
            /> */}
            <Input
              id={'email-input'}
              type="email"
              error={errors.email && formSubmitted}
              placeholder="Ingresa tu Correo Electrónico"
              fullWidth
              sx={{ height: '38px', borderRadius: '5px' }}
              {...register('email', { required: true })}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <InputLabel htmlFor="password-input">Contraseña</InputLabel>
            <TextField
              id="password-input"
              label="Password"
              type="password"
              placeholder="your password"
              error={errors.password && formSubmitted}
              helperText={'La contraseña'}
              fullWidth
              {...register('password', { required: true })}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid display={errorMessage ? '' : 'none'} item sm={12}>
              <Alert severity="error">{errorMessage}</Alert>
            </Grid>
            <Grid item sm={6}>
              <Button
                disabled={isAuthenticating}
                type="submit"
                variant="contained"
                fullWidth
              >
                <Typography variant="body1">Login</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/signup/">
              Crear cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}

export default Login
