import { Grid, Typography } from '@mui/material'
import { Note as NoteProps } from '../../interfaces'
import { FiEdit2 } from 'react-icons/fi'
import { IoMdClose } from 'react-icons/io'
import { useAppDispatch } from '../../../store'
import { deleteNote, editNote } from '../../../store/notes'

import './Note.scss'

const Note = ({ id, title, body }: NoteProps) => {
  const dispatch = useAppDispatch()
  const handleDeleteNote = (id: number) => {
    dispatch(deleteNote(id))
  }
  const handleEditNote = (id: number) => {
    dispatch(editNote(id))
  }
  return (
    <Grid
      container
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        borderRadius: '6px',
      }}
    >
      {/* Header/Title */}
      <Grid
        sx={{
          padding: '15px 15px 10px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          sx={{ color: '#5E5873', fontWeight: '500', lineHeight: '24px' }}
        >
          {title}
        </Typography>

        <Grid sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <button
            onClick={() => handleEditNote(id)}
            className="note-action-button"
          >
            <FiEdit2 size={18} color="#6E6B7B" />
          </button>
          <button
            onClick={() => handleDeleteNote(id)}
            className="note-action-button"
          >
            <IoMdClose size={26} color="#6E6B7B" />
          </button>
        </Grid>
      </Grid>
      <hr style={{ width: '100%', margin: '0', border: '1px solid #EBE9F1' }} />
      {/* Body */}
      <Grid sx={{ padding: '15px 15px 20px' }}>
        <Typography>{body}</Typography>
      </Grid>
    </Grid>
  )
}

export default Note
