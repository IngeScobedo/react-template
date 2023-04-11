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
  const [isLoading, setIsLoading] = useState(false)
  const [files, setFiles] = useState<FileList>()
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target && e.target.files) {
      const files = e.target.files
      setFiles(files)
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
    <div className="upload-files-container">
      <div className="drag-file-area">
        <label className="label">
          <span className="browse-files">
            <input
              onChange={handleChange}
              type="file"
              className="default-file-input"
            />
            <span className="browse-files-text">Busca tu archivo</span>
            <span> desde tu dispositivo</span>
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
        <div className="file-block">
          <div className="file-info">
            <span className="material-icons-outlined file-icon">
              description
            </span>
            <span className="file-name">{files && files[0].name}</span> |
            <span className="file-size">
              {files && (files[0].size / 1024).toFixed(1) + 'kb'}
            </span>
          </div>
          <div className="progress-bar"></div>
        </div>
      )}
      <button onClick={handleUpload} type="button" className="upload-button">
        Upload
      </button>
    </div>
  )
}

export default FileUploadInput
