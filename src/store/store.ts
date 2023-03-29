import { configureStore } from "@reduxjs/toolkit"
import { authApi } from "./auth/AuthApi"
import authReducer from "./auth/AuthSlice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        [authApi.reducerPath]: authApi.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch