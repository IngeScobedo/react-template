import { ChangeEvent, useState } from 'react'
import './FileInput.css'
const FileUploadInput = () => {
  const [files, setFiles] = useState<FileList>()
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target && e.target.files) {
      const files = e.target.files
      setFiles(files)
    }
  }

  const handleUpload = async () => {
    const form = new FormData()
    files && form.append('pdfFile', files[0])
    console.log(files)
    await fetch('http://127.0.0.1:3000/upload', {
      method: 'POST',
      body: form,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      })
  }

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
