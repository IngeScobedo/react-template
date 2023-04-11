/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/require-await */
import { ChangeEvent, useState, useEffect } from 'react'
import './FileInput.css'
import { socket } from '../socket'

export interface pdf2imgProps {
  sender: string
  room: string
  file: ArrayBuffer
}

const FileUploadInput = () => {
  const [files, setFiles] = useState<FileList>()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target && e.target.files) {
      const files = e.target.files
      setFiles(files)
      setError('')
    }
  }

  const handleUpload = async (): Promise<void> => {
    setIsLoading(true)

    const form = new FormData()
    files && form.append('pdfFile', files[0])
    console.log(files)
    if (!files) return

    const reader = new FileReader()
    reader.onloadend = async () => {
      const fileArrayBuffer = reader.result as ArrayBuffer
      const payload: pdf2imgProps = {
        sender: 'Alan',
        file: fileArrayBuffer,
        room: '1',
      }
      // eslint-disable-next-line @typescript-eslint/await-thenable
      await socket.emit('pdf2img', payload, () => {
        console.log('TERMINO EMIT PDF2IMG')
        setIsLoading(false)
      })
    }
    reader.readAsArrayBuffer(files[0])
    // await fetch('http://127.0.0.1:3000/upload', {
    //   method: 'POST',
    //   body: form,
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data)
    //   })
  }

  useEffect(() => {
    socket.on('received-files', (data) => {
      console.log('RESPUESTA DEL SERVER', data)
    })
  }, [socket])

  return (
    <div className="w-full md:w-[420px] shadow-2xl rounded-3xl p-4 bg-white flex flex-col items-center justify-center">
      <div className="border-2 border-dashed w-full rounded-xl md:w-[350px] border-blue-600 flex justify-center items-center p-4">
        <label className="label w-10/12 text-center">
          <span className="browse-files font-bold">
            <input
              onChange={handleChange}
              type="file"
              className="default-file-input"
            />
            {!isLoading ? (
              <>
                <span className="browse-files-text text-blue-600">
                  Busca tu constancia
                </span>
                <span> desde tu dispositivo</span>
              </>
            ) : (
              <h1 className="text-xl text-yellow-500 text-center">
                Cargando tu constancia...
              </h1>
            )}
          </span>
        </label>
      </div>
      {isLoading ? <h1>isloading</h1> : <h1>not loading</h1>}
      <span className="cannot-upload-message">
        <span className="material-icons-outlined">error</span> Please select a
        file first
        <span className="material-icons-outlined cancel-alert-button">
          cancel
        </span>
      </span>
      {files && (
        <div className="file-block bg-blue-600">
          <div className="file-info">
            <span className="material-icons-outlined file-icon">
              Descripción:
            </span>
            <span className="file-name">{files && files[0]?.name}</span> |
            <span className="file-size">
              {files && (files[0].size / 1024).toFixed(1) + 'kb'}
            </span>
          </div>
          <div className="progress-bar"></div>
        </div>
      )}
      {error && (
        <h5 className="text-center text-lg text-red-600 italic">{error}</h5>
      )}
      <button
        disabled={isLoading}
        onClick={handleUpload}
        className="px-4 rounded-md py-2 bg-blue-600 mt-8 text-white font-bold disabled:bg-blue-300 disabled:cursor-not-allowed"
      >
        Cargar constancia de situacion fiscal
      </button>
    </div>
  )
}

export default FileUploadInput
