import Masonry from '@mui/lab/Masonry'
import { useAppSelector } from '../../../store'
import Note from '../note/Note'

const NotesList = () => {
  const { notes } = useAppSelector((state) => state.notes)
  return (
    <Masonry columns={3} spacing={2}>
      {notes.map((note, i) => (
        <Note key={i} {...note} />
      ))}
    </Masonry>
  )
}

export default NotesList
