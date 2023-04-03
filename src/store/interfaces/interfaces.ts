// Reducex states

import { Note } from '../../notes/interfaces'

// Define a type for the slice state
export interface AuthState {
  user: User | undefined
  isLoggedIn: boolean
  isLogged: boolean
  errorMessage: string | undefined
  status: 'not-authenticated' | 'authenticated'
  token: string | undefined
}

export interface NotesState {
  notes: Note[]
  editingNote: Note | null
}

// RTK Query

export interface User {
  _id: number
  name: string
  email: string
  created_at?: number
  renovated_at?: number | undefined
  expiration?: number
}
export interface UserResponse {
  user: User
  token: string
}

export interface LoginRequest {
  email: string
  password: string
}

export interface RecoverResponse {
  token: string
}

export interface RecoverRequest {
  email: string
}

export interface ResetPasswordRequest {
  token: string
  password: string
}
