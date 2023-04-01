import { User } from '../auth/AuthSlice'

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
