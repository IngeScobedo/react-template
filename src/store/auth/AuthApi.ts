import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

export const authApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000'}),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (loginForm) => ({
                url: '/api/login',
                method: 'POST',
                body: loginForm
            })
        })
    })
})