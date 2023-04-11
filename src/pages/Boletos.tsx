/* eslint-disable @typescript-eslint/no-misused-promises */
import { useEffect, useState } from 'react'
import Input from '../components/Input'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { BsFillSendFill } from 'react-icons/bs'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form'
import { useAppDispatch } from '../store/hooks'
import { setTikets } from '../store/UserSlice'
import { IoIosRemoveCircle } from 'react-icons/io'
import './Boletos.scss'
import { Dropdown } from 'react-bootstrap'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillTelephoneOutboundFill } from 'react-icons/bs'

export interface Boleto {
  no: string
  clave: string
}

interface Form {
  boletos: Boleto[]
}

const JsSchema = Yup.object().shape({
  boletos: Yup.array().of(
    Yup.object().shape({
      no: Yup.string().required('Value is mendatory'),
      clave: Yup.string().required('Value is mendatory'),
    })
  ),
})

const Boletos = () => {
  const dispatch = useAppDispatch()
  const [boletos] = useState<Boleto[]>([
    {
      no: 'BXXXA000',
      clave: '',
    },
  ])

  const { control, formState, handleSubmit, register } = useForm<Form>({
    resolver: yupResolver(JsSchema),
    defaultValues: { boletos: boletos },
  })
  const onSubmit: SubmitHandler<Form> = (data) => {
    dispatch(setTikets(data.boletos))
  }
  const { errors, isValid } = formState
  const { fields, append, remove } = useFieldArray({
    name: 'boletos',
    control,
    rules: { minLength: 1 },
  })

  const handleAddTicket = () => {
    const dataToAppend = { clave: '', no: '' }

    append(dataToAppend)
  }

  const handleRemoveTicket = (i: number) => {
    console.log(i)
    remove(i)
  }

  const handleError = (error: string | undefined) => {
    if (typeof error !== 'string') return ''
    return error
  }

  useEffect(() => {
    console.log('fields', fields)
  }, [fields])
  return (
    <div
      id="boletos"
      className="w-screen h-screen overflow-scroll bg-slate-100 p-4 md:px-6 flex justify-center items-start realative"
    >
      <div className="absolute bottom-4 right-4">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            REPORTAR PROBLEMA EN LA PLATAFORMA
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="mailto:estacionamiento@dtc.mx">
              <p className="flex flex-row gap-2 items-center">
                <AiOutlineMail />
                Mandar Correo a estacionamiento@dtc.mx
              </p>
            </Dropdown.Item>
            <Dropdown.Item href="tel:3318932758">
              <p className="flex flex-row gap-2 items-center">
                <BsFillTelephoneOutboundFill />
                Llamanos a 3318932758
              </p>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="ticket-list bg-white rounded-xl py-2 md:py-6 h-auto overflow-scroll w-full lg:w-auto flex">
        {/* LISTA DE BOLETOS */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex justify-between items-center flex-col py-2 md:py-0 space-y-2 w-full"
        >
          {/* BOLETO */}
          {fields.length &&
            fields.map((item, i) => (
              <div
                key={item.id}
                className="w-full flex flex-col space-y-2 md:space-y-0 justify-between items-center even:bg-blue-100 px-4 py-2 md:px-4 lg:w-full lg:flex-row"
              >
                <div className="flex items-center gap-4 pt-1">
                  <h5 className="text-[16px] font-bold text-center m-0 text-blue-600">
                    Boleto {i + 1}
                  </h5>
                  {fields.length >= 2 && (
                    <button
                      className="h-auto m-0 p-0"
                      onClick={() => handleRemoveTicket(i)}
                    >
                      <IoIosRemoveCircle
                        size={22}
                        className="lg:mt-5 text-red-600 md:hidden"
                      />
                    </button>
                  )}
                </div>
                <div className="flex w-full items-center flex-col md:grid md:grid-cols-[auto_auto] gap-4">
                  <div className="w-full flex flex-col gap-4 md:flex-row">
                    <Input
                      label="No. boleto"
                      placeholder="Boleto Ej. BXXXA001"
                      errorMessage={handleError(
                        errors.boletos?.[i]?.no?.message
                      )}
                      {...register(`boletos.${i}.no`)}
                    />
                    <Input
                      errorMessage={handleError(
                        errors.boletos?.[i]?.clave?.message
                      )}
                      label="Clave"
                      {...register(`boletos.${i}.clave`)}
                    />
                  </div>
                  {fields.length >= 2 && (
                    <button
                      className="mt-4 text-red-600 hidden md:block"
                      onClick={() => handleRemoveTicket(i)}
                    >
                      <IoIosRemoveCircle size={28} />
                    </button>
                  )}
                </div>
              </div>
            ))}

          <hr className="w-full md:mb-4 h-[1px] border border-slate-300" />

          <div className="w-full flex justify-center space-x-4 mt-4">
            {fields.length < 10 && (
              <button
                onClick={handleAddTicket}
                className="px-2 py-1 md:px-8 md:py-3 rounded-xl bg-blue-600 text-white flex items-center gap-1 md:gap-3"
              >
                <IoMdAddCircleOutline size={24} color="#fff" />
                Añadir otro boleto
              </button>
            )}

            <button
              disabled={!isValid}
              type="submit"
              className="px-2 py-1 md:px-8 md:py-3 rounded-xl bg-blue-600 text-white flex items-center gap-1 md:gap-3 disabled:bg-blue-300 disabled:cursor-not-allowed"
            >
              <BsFillSendFill size={20} color="#fff" />
              Emitir CFDI
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Boletos
