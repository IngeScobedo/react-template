import { Grid } from '@mui/material'
import Button from '../components/button/Button'
import Form from '../components/form/Form'
import Input from '../components/input/Input'
import AuthLayout from '../layout/AuthLayout'
import { Email } from '../stories/components/Input.stories'

const RecoverPassword = () => {
  return (
    <AuthLayout
      title="¿Olvidaste tu Contraseña?"
      description="Ingresa tu correo electrónico y te enviaremos instrucciones para restablecer tu contraseña."
    >
      <Form>
        <Email
          label="Correo Electronico"
          placeholder="Ingresa tu correo electronico"
        />

        <Button variant="contained" type="submit" fullWidth>
          Enviar Instrucciones
        </Button>
      </Form>
    </AuthLayout>
  )
}

export default RecoverPassword
