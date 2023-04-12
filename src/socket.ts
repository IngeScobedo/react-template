import { io } from 'socket.io-client'

const HOST = window.location.hostname
console.log(import.meta.env)
const URL =
  import.meta.env.MODE !== 'development'
    ? `https://${HOST}/pdf2img`
    : `http://${HOST}:3000/pdf2img`

export const socket = io(URL)
