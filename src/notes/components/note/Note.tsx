import { Grid, Typography } from '@mui/material'
import { Note as NoteProps } from '../../interfaces'

const Note = ({ title, body }: NoteProps) => {
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
      <Grid sx={{ padding: '15px 15px 10px' }}>
        <Typography>{title}</Typography>
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
