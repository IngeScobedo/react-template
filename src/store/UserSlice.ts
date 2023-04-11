import { Boleto } from './../pages/Boletos'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Inputs } from '../interfaces/interfaces'

export interface userState {
  user: Inputs
  boletos: Boleto[]
  confirmacionDeDatos: boolean
}

const initialState: userState = {
  user: {
    nombre: '',
    cp: '',
    regimen: '',
    situacion: '',
  },
  boletos: [],
  confirmacionDeDatos: false,
}

const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, { payload }: PayloadAction<Inputs>) => {
      state.user = payload
    },
    setTikets: (state, { payload }: PayloadAction<Boleto[]>) => {
      state.boletos = payload
    },
    setConfirmPersonalData: (state) => {
      state.confirmacionDeDatos = true
    },
  },
})

export const { setUserData, setTikets, setConfirmPersonalData } =
  usersSlice.actions

export default usersSlice.reducer
