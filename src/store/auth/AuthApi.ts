import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
  LoginRequest,
  UserResponse,
  RecoverResponse,
  RecoverRequest,
  ResetPasswordRequest,
} from '../interfaces'

export const authApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000' }),
  endpoints: (builder) => ({
    login: builder.mutation<UserResponse, LoginRequest>({
      query: (body) => ({
        url: '/api/login',
        method: 'POST',
        body,
      }),
    }),
    recoverPassword: builder.mutation<RecoverResponse, RecoverRequest>({
      query: (body) => ({
        url: '/api/recover_password',
        method: 'POST',
        body,
      }),
    }),
    restorePassword: builder.mutation<string, ResetPasswordRequest>({
      query: (req) => ({
        url: '/api/reset_password',
        method: 'POST',
        body: req.password,
        headers: { Authorization: `Bearer ${req.token}` },
        responseHandler: (res) => res.text(),
      }),
    }),
  }),
})

export const {
  useLoginMutation,
  useRecoverPasswordMutation,
  useRestorePasswordMutation,
} = authApi
