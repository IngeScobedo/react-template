import { Grid } from '@mui/material'
import DialogTitle from '@mui/material/DialogTitle'
import IconButton from '@mui/material/IconButton'
import { IoMdClose } from 'react-icons/io'

export interface DialogTitleProps {
  id: string
  children?: React.ReactNode
  onClose: () => void
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props

  return (
    <DialogTitle
      sx={{
        m: 0,
        p: '15px 23px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'background.default',
        borderRadius: '6px 6px 0 0',
      }}
      {...other}
    >
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 1,
            top: 1,
          }}
        >
          <Grid
            sx={{
              width: '34px',
              height: '34px',
              borderRadius: '6px',
              backgroundColor: 'white',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              top: '-8px',
              right: '-8px',
            }}
          >
            <IoMdClose size={20} color="#5E5873" />
          </Grid>
        </IconButton>
      ) : null}
    </DialogTitle>
  )
}

export default BootstrapDialogTitle
