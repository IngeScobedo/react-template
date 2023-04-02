import {
  RecoverPasswordInputs,
  RecoverPasswordInputsErrors,
} from '../interfaces'
import { checkMutationError } from '../utils'
import { setToken } from '../../store/auth'
import { useAppDispatch } from '../../store'
import { useRecoverPasswordMutation } from '../../store/auth'
import { useNavigate } from 'react-router-dom'

export const useLoginUser = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [recovery, { isLoading }] = useRecoverPasswordMutation()

  const recoverPassword = async (
    data: RecoverPasswordInputs
  ): Promise<{ errors: RecoverPasswordInputsErrors; token: string | null }> => {
    try {
      const response = await recovery(data).unwrap()
      dispatch(setToken({ token: response.token }))
      navigate(`/auth/restore`)
      return { errors: {}, token: response.token }
    } catch (error) {
      const errors = checkMutationError(error)
      return { errors, token: null }
    }
  }

  return { recoverPassword, isLoading }
}

export default useLoginUser
