import { useState } from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'

import { IoMdAddCircleOutline } from 'react-icons/io'

import { Button, Input, Textarea } from '../../../ui'
import BootstrapDialog from './BootstrapDialog'
import BootstrapDialogTitle from './BootstrapDialogTitle'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useAppDispatch } from '../../../store'
import { addNote } from '../../../store/notes'
import { Note } from '../../interfaces'

const Modal = () => {
  const [open, setOpen] = useState(false)
  const { register, handleSubmit } = useForm<Note>()
  const dispatch = useAppDispatch()

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const onSubmit: SubmitHandler<Note> = (data: Note): void => {
    dispatch(addNote(data))
  }

  return (
    <div>
      {/* BUTTON TO OPEN THE MODEL */}
      <Grid sx={{ justifyContent: 'center', display: 'flex' }}>
        <Button
          startIcon={<IoMdAddCircleOutline />}
          variant="contained"
          onClick={handleClickOpen}
        >
          Agregar Nota
        </Button>
      </Grid>

      {/* MODAL TO ADD NOTE */}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        {/* HEADER/TITLE */}
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          <IoMdAddCircleOutline size={18} color="#5E5873" />
          <Typography variant="AddNoteModalHeader">Agregar Nota</Typography>
        </BootstrapDialogTitle>

        {/* BODY/CONTENT */}
        <DialogContent dividers>
          <form id="login-form" onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Input
                variant="note-title"
                label="Titulo de la nota"
                placeholder="Ingresar Titulo"
                {...register('title')}
              />
              <Textarea
                variant="body-note"
                label="Cuerpo de la nota"
                placeholder="Ingresa el cuerpo"
                {...register('body')}
              />
            </Grid>
          </form>
        </DialogContent>

        {/* BOTTOM BOTTONS */}
        <DialogActions>
          <Button
            variant="contained"
            sx={{ backgroundColor: '#3554D1' }}
            autoFocus
            onClick={handleClose}
          >
            Añadir Nota
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  )
}

export default Modal
