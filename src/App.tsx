import Input from './components/Input'
import FileUploadInput from './components/FileUploadInput'
import { SubmitHandler, useForm } from 'react-hook-form'
import ConnectionState from './components/ConnectionState'
import Events from './components/Events'
import ConnectionManager from './components/ConnectionManager'
import Form from './components/Form'
import React, { useState, useEffect } from 'react'
import { socket } from './socket'
export interface Inputs {
  nombre: string
  situacion: string
  cp: string
  regimen: string
}
const App = () => {
  const [isConnected, setIsConnected] = useState(socket.connected)
  const [fooEvents, setFooEvents] = useState<string[]>([])
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => console.log(data)

  useEffect(() => {
    function onConnect() {
      setIsConnected(true)
    }

    function onDisconnect() {
      setIsConnected(false)
    }

    function onFooEvent(value: string) {
      setFooEvents((previous) => [...previous, value])
    }

    socket.on('connect', onConnect)
    socket.on('disconnect', onDisconnect)
    socket.on('foo', onFooEvent)

    return () => {
      socket.off('connect', onConnect)
      socket.off('disconnect', onDisconnect)
      socket.off('foo', onFooEvent)
    }
  }, [])
  return (
    <div className="form-container min-w-screen min-h-screen max-w-screen max-h-screen">
      {/* FORM */}
      <div className="flex justify-center items-center flex-col">
        <h1 className="title">Facturacion electronica</h1>
        <form className="max-w-[407px] p-8 flex flex-col space-y-3">
          <Input label="Nombre" placeholder="Ingresa el nombre..." />
          <Input
            label="Situacion"
            placeholder="Ingresa la situación fiscal..."
          />
          <Input label="CP" placeholder="Ingresa el codigo postal..." />
          <Input label="Regimen" placeholder="Ingresa el regimen..." />

          <button className="w-[347px] h-[38px] rounded-md bg-blue-600 mt-8 text-white font-bold">
            Enviar
          </button>
        </form>

        <div className="App">
          <ConnectionState isConnected={isConnected} />
          <Events events={fooEvents} />
          <ConnectionManager />
          <Form />
        </div>
      </div>

      {/* FILE UPLOAD */}
      <div className="bg-blue-600 flex justify-center items-center">
        <FileUploadInput />
      </div>
    </div>
=======
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './router/AppRouter'

import { store } from './store/store'

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
>>>>>>> 8c63cfc357a7b315d57b43f54901b0c4577f93e2
  )
}

export default App
