import { styled } from '@mui/material/styles'
import Dialog from '@mui/material/Dialog'

const BootstrapDialog = styled(Dialog)(() => ({
  '& .MuiDialogContent-root': {
    padding: '20px',
  },
  '& .MuiPaper-root': {
    overflow: 'visible !important',
    width: '450px',
    backgroundColor: '#FFFFFF',
    borderRadius: '6px',
    boxShadow: ' 0px 4px 15px rgba(44, 63, 88, 0.35)',
  },
}))

export default BootstrapDialog
