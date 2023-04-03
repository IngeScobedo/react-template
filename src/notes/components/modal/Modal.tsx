import { useState } from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import { InputLabel } from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'

import { IoMdAddCircleOutline } from 'react-icons/io'

import { Button, Input } from '../../../ui'
import BootstrapDialog from './BootstrapDialog'
import BootstrapDialogTitle from './BootstrapDialogTitle'
import { useAppDispatch } from '../../../store'
import { addNote } from '../../../store/notes'
import { AddNoteInputs } from '../../interfaces'
import { AddNoteFormOptions } from './FormSchemas'

import './Modal.scss'

const Modal = () => {
  const [open, setOpen] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AddNoteInputs>(AddNoteFormOptions)
  const dispatch = useAppDispatch()

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const onSubmit: SubmitHandler<AddNoteInputs> = (
    data: AddNoteInputs
  ): void => {
    dispatch(addNote(data))
    reset()
    handleClose()
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
        keepMounted
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <form id="add-note-form" onSubmit={handleSubmit(onSubmit)}>
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
            <Grid container spacing={2}>
              <Input
                id="title-note"
                variant="note-title"
                label="Titulo de la nota"
                placeholder="Ingresar Titulo"
                errorMessage={errors?.title && errors?.title?.message}
                {...register('title')}
              />

              <Grid item xs={12}>
                <div className="textarea-wrapper">
                  <Grid
                    item
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                    xs={12}
                  >
                    <InputLabel
                      sx={{ color: 'text.secondary', fontSize: '12px' }}
                      htmlFor="note-body"
                    >
                      Cuerpo de la nota
                    </InputLabel>
                  </Grid>
                  <textarea
                    id="note-body"
                    placeholder="Ingresa el cuerpo"
                    className={`${errors.body?.message ? 'input-error' : ''}`}
                    {...register('body')}
                  />
                  {errors?.body && (
                    <p className="body-error-message">
                      {errors?.body?.message}
                    </p>
                  )}
                </div>
              </Grid>
            </Grid>
          </DialogContent>

          {/* BOTTOM BOTTONS */}
          <DialogActions>
            <Button
              variant="contained"
              sx={{ backgroundColor: '#3554D1' }}
              type="submit"
            >
              Añadir Nota
            </Button>
          </DialogActions>
        </form>
      </BootstrapDialog>
    </div>
  )
}

export default Modal
