import { checkMutationError } from '../utils'
import { logout, useRestorePasswordMutation } from '../../store/auth'
import { ResetPasswordRequest, useAppDispatch } from '../../store'
import { useNavigate } from 'react-router-dom'
import { RestorePasswordInputsErrors } from '../interfaces'

export const useResetPassword = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [restore, { isLoading }] = useRestorePasswordMutation()

  const resetPassword = async (
    data: ResetPasswordRequest
  ): Promise<{ errors: RestorePasswordInputsErrors; ok: string | null }> => {
    try {
      await restore(data).unwrap()
      dispatch(logout({}))
      navigate(`/auth/login`)
      return { errors: {}, ok: 'ok' }
    } catch (error) {
      const errors = checkMutationError(error)
      return { errors, ok: null }
    }
  }

  return { resetPassword, isLoading }
}

export default useResetPassword
