import { io } from 'socket.io-client'

const URL =
  import.meta.env.NODE_ENV === 'production'
    ? 'http://localhost:3000'
    : 'http://localhost:3000/pdf2img'

export const socket = io(URL)
