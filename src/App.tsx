import Input from './components/Input'
import FileUploadInput from './components/FileUploadInput'
import { useForm } from 'react-hook-form'
export interface Inputs {
  nombre: string
  situacion: string
  cp: string
  regimen: string
}
const App = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => console.log(data)
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
      </div>

      {/* FILE UPLOAD */}
      <div className="bg-blue-600 flex justify-center items-center">
        <FileUploadInput />
      </div>
    </div>
  )
}

export default App
