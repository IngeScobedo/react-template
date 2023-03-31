import { createSlice } from '@reduxjs/toolkit/'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface User {
  id: number
  name: string
  email: string
}

// Define a type for the slice state
export interface AuthState {
  user: User | null
  isLoggedIn: boolean
  isLogged: boolean
  errorMessage: string
  status: 'checking' | 'not-authenticated' | 'authenticated'
}

// Define the initial state using that type
const initialState: AuthState = {
  user: null,
  isLoggedIn: false,
  isLogged: false,
  errorMessage: '',
  status: 'not-authenticated',
}

export const authSlice = createSlice({
  name: 'auth',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    login: (state, { payload }: PayloadAction<User>) => {
      console.log(payload)
      state.user = null
    },
    logout: (state) => {
      state.user = null
      state.status = 'not-authenticated'
    },
  },
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer
