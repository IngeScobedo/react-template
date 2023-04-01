import { createSlice } from '@reduxjs/toolkit/'
import type { PayloadAction } from '@reduxjs/toolkit'
import { AuthState, RecoverResponse, User } from '../interfaces'

// Define the initial state using that type
const initialState: AuthState = {
  user: undefined,
  isLoggedIn: false,
  isLogged: false,
  errorMessage: '',
  status: 'not-authenticated',
  token: undefined,
}

export const authSlice = createSlice({
  name: 'auth',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    login: (state, { payload }: PayloadAction<User>) => {
      state.user = payload
      state.status = 'authenticated'
    },
    logout: (state, { payload }: PayloadAction<{ errorMessage?: string }>) => {
      state.user = undefined
      state.status = 'not-authenticated'
      state.errorMessage = payload?.errorMessage
      state.token = undefined
    },
    setToken: (state, { payload }: PayloadAction<RecoverResponse>) => {
      state.token = payload?.token
    },
  },
})

export const { login, logout, setToken } = authSlice.actions

export default authSlice.reducer
