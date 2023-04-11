import { useState } from 'react'
import { socket } from '../socket'

const Form = () => {
  const [value, setValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)
    console.log('EMIT')

    socket.timeout(5000).emit('createPdf2img', value, () => {
      setIsLoading(false)
    })
  }

  return (
    <form onSubmit={onSubmit}>
      <input onChange={(e) => setValue(e.target.value)} />

      <button type="submit" disabled={isLoading}>
        Submit
      </button>
    </form>
  )
}

export default Form
