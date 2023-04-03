import { useEffect, useState } from 'react'
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
import { useAppDispatch, useAppSelector } from '../../../store'
import { addNote, editNote, setNoteToEdit } from '../../../store/notes'
import { AddNoteInputs } from '../../interfaces'
import { AddNoteFormOptions } from './FormSchemas'

import './Modal.scss'
import { FiEdit2 } from 'react-icons/fi'

export interface Props {
  modalTitle: string
  buttonVariant: 'add-note' | 'edit-note'
}

export const Modal = ({ modalTitle, buttonVariant }: Props) => {
  const [open, setOpen] = useState(false)
  const dispatch = useAppDispatch()
  const { editingNote } = useAppSelector((state) => state.notes)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm<AddNoteInputs>(AddNoteFormOptions)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    reset()
    dispatch(setNoteToEdit(null))
    setOpen(false)
  }
  const onSubmit: SubmitHandler<AddNoteInputs> = (
    data: AddNoteInputs
  ): void => {
    if (editingNote) {
      dispatch(editNote(data))
    } else {
      dispatch(addNote(data))
    }

    reset()
    handleClose()
  }

  const setNoteToEditValues = () => {
    if (!editingNote) return
    editingNote && setOpen(true)
    for (const field of Object.keys(editingNote)) {
      if (field === 'title' || field === 'body') {
        console.log(field, editingNote)
        setValue(field, editingNote[field])
      }
    }
  }

  useEffect(() => {
    console.log('editingNote', editingNote)
    setNoteToEditValues()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editingNote])

  return (
    <div>
      {/* BUTTON TO OPEN THE MODEL */}
      {buttonVariant === 'add-note' ? (
        <Grid sx={{ justifyContent: 'center', display: 'flex' }}>
          <Button
            startIcon={<IoMdAddCircleOutline />}
            variant="contained"
            onClick={handleClickOpen}
          >
            Agregar Nota
          </Button>
        </Grid>
      ) : (
        <button className="note-action-button" onClick={handleClickOpen}>
          <FiEdit2 size={18} color="#6E6B7B" />
        </button>
      )}

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
            <Typography variant="AddNoteModalHeader">{modalTitle}</Typography>
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
