import { configureStore } from '@reduxjs/toolkit'
import { authApi } from './auth/AuthApi'
import authReducer from './auth/AuthSlice'
import notesReducer from './notes/NotesSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    notes: notesReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
