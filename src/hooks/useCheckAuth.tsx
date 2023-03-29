import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../store/auth/AuthSlice'
import { RootState } from '../store/store'

export const useCheckAuth = () => {
  const dispatch = useDispatch()
  const authState = useSelector((state: RootState) => state.auth)

  useEffect(() => {
      dispatch(logout())
  }, [])
  return authState.status
}
