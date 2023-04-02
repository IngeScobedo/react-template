import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { default as MuiModal } from '@mui/material/Modal'
import { useState } from 'react'
import { Button } from '../../../ui'
import { MdOutlineAddCircleOutline } from 'react-icons/md'
import { Grid } from '@mui/material'

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

const Modal = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <Grid sx={{ justifyContent: 'center', display: 'flex' }}>
      <Button
        onClick={handleOpen}
        variant="contained"
        sx={{
          background: 'linear-gradient(45deg, #3554D1 0%, #8B9AD7 100%)',
        }}
        startIcon={<MdOutlineAddCircleOutline />}
      >
        Agregar Nota
      </Button>
      <MuiModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </MuiModal>
    </Grid>
  )
}

export default Modal
