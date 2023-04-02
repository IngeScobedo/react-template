import { LoginInputs, LoginInputErrors } from '../interfaces'
import { checkMutationError } from '../utils'
import { login } from '../../store/auth'
import { useAppDispatch } from '../../store'
import { useLoginMutation } from '../../store/auth'
import { User } from '../../store/interfaces'

export const useLoginUser = () => {
  const dispatch = useAppDispatch()
  const [userLogin, { isLoading }] = useLoginMutation()

  const loginUser = async (
    data: LoginInputs
  ): Promise<{ errors: LoginInputErrors; user: User | null }> => {
    try {
      const response = await userLogin(data).unwrap()
      dispatch(login(response))

      return { errors: {}, user: response.user }
    } catch (error) {
      const errors = checkMutationError(error)
      return { errors, user: null }
    }
  }

  return { loginUser, isLoading }
}

export default useLoginUser
