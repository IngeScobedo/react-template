import { createSlice } from '@reduxjs/toolkit/'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface User {
    id: number;
    name: string;
    email: string;
}

// Define a type for the slice state
interface AuthState {
  user: User | null;
  isLoggedIn: boolean;
  isLogged: boolean;
}

// Define the initial state using that type
const initialState: AuthState = {
  user: null,
  isLoggedIn: false,
  isLogged: false
}

export const authSlice = createSlice({
  name: 'auth',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    login: (state, { payload }: PayloadAction<User>) => {
        console.log(payload)
      state.user = null
    }
  },
})

export const { login } = authSlice.actions

export default authSlice.reducer