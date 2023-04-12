/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { SubmitHandler, useForm } from 'react-hook-form'
import FileUploadInput from '../components/FileUploadInput'
import Input from '../components/Input'
import { Inputs } from '../interfaces/interfaces'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { setConfirmPersonalData, setUserData } from '../store/UserSlice'
import Modal from 'react-bootstrap/Modal'
import { useEffect, useState } from 'react'
import { socket } from '../socket'

export interface User {
  nombre: string
  cp: string
  regimen: string
  situacion: string
}

const JsSchema = Yup.object().shape({
  nombre: Yup.string().required('Value is mendatory'),
  situacion: Yup.string().required('Value is mendatory'),
  cp: Yup.string().required('Value is mendatory'),
  regimen: Yup.string().required('Value is mendatory'),
})

const optionsDf = { resolver: yupResolver(JsSchema) }

const InformacionFacturacion = () => {
  const [isValid, setIsValid] = useState(false)
  const [show, setShow] = useState<boolean>(true)
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false)

  const dispatch = useAppDispatch()
  const { user } = useAppSelector((state) => state.user)

  const { register, setValue, handleSubmit, formState } =
    useForm<Inputs>(optionsDf)
  const { errors, isLoading } = formState

  const onSubmit: SubmitHandler<Inputs> = () => {
    if (!isValid) return
    dispatch(setConfirmPersonalData())
  }

  const handleErrors = (err: string | undefined) => {
    if (typeof err !== 'string') return ''
    return err
  }

  const handleClose = () => setShow(false)

  useEffect(() => {
    socket.on('finishpdf2img', (userResponse: Inputs) => {
      dispatch(setUserData(user))
      const { nombre, cp, situacion, regimen } = userResponse
      const isValidForm = nombre && cp && regimen && situacion ? true : false
      setValue('nombre', nombre)
      setValue('cp', cp)
      setValue('regimen', regimen)
      setValue('situacion', situacion)
      setIsValid(isValidForm)
      if (isValidForm) {
        setShowSuccessMessage(true)

        setTimeout(() => {
          setShowSuccessMessage(false)
        }, 3000)
      }
    })
  }, [socket])

  return (
    <div className="w-screen flex flex-col-reverse px-4 py-10 gap-5 pb-10 lg:w-screen lg:h-screen lg:grid lg:grid-cols-2">
      {/* FORM */}
      <div className="flex justify-center items-center flex-col">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white rounded-3xl w-full md:w-auto p-4 md:p-8 flex flex-col space-y-3 shadow-xl"
        >
          <h1 className="title text-2xl mb-2 text-center text-blue-600">
            Datos de facturación
          </h1>
          {showSuccessMessage && (
            <div className="w-full bg-green-600 rounded-xl flex justify-center items-center text-center">
              <h5 className="text-white text-sm leading-8 m-0 p-0 py-2">
                Tus datos fueron cargados exitosamente!
              </h5>
            </div>
          )}
          <Input
            className="cursor-not-allowed"
            disabled
            label="Nombre"
            placeholder="Tu nombre..."
            errorMessage={handleErrors(errors.nombre?.message)}
            {...register('nombre')}
          />
          <Input
            className="cursor-not-allowed"
            disabled
            label="Situacion"
            placeholder="Tu situación fiscal..."
            errorMessage={handleErrors(errors.situacion?.message)}
            {...register('situacion')}
          />
          <Input
            className="cursor-not-allowed"
            disabled
            label="CP"
            placeholder="Tu codigo postal..."
            errorMessage={handleErrors(errors.cp?.message)}
            {...register('cp')}
          />
          <Input
            className="cursor-not-allowed"
            disabled
            label="Regimen"
            placeholder="Tu regimen..."
            errorMessage={handleErrors(errors.regimen?.message)}
            {...register('regimen')}
          />

          <button
            disabled={isLoading}
            className="lg:w-[347px] h-[38px] rounded-md bg-blue-600 mt-8 text-white font-bold disabled:bg-blue-300 disabled:cursor-not-allowed"
          >
            Siguiente
          </button>
        </form>
      </div>

      {/* FILE UPLOAD */}
      <div className="flex justify-center items-center">
        <FileUploadInput />
      </div>
      <Modal contentClassName="w-10/12 md:w-[445px]" show={show} size="sm">
        <Modal.Header closeButton>
          <Modal.Title className="font-bold text-red-600">ATENCIÓN</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h2 className="text-lg md:text-2xl text-blue-600 font-bold">
            Estimado contribuyente, le recordamos que cuenta hasta el ultimo dia
            del mes en curso para poder facturar sus boletos, ya que por nuevas
            disposiciones del SAT los Recibos no facturados seran declarados en
            la factura global.
          </h2>
        </Modal.Body>
        <Modal.Footer>
          <button
            onClick={handleClose}
            className="h-[38px] px-4 rounded-md bg-blue-600 mt-8 text-white font-bold disabled:bg-blue-300 disabled:cursor-not-allowed"
          >
            Entendido
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default InformacionFacturacion
