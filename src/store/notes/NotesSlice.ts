import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Note } from '../../notes/interfaces'
import { NotesState } from '../interfaces'

const initialState: NotesState = {
  notes: [
    {
      id: 1,
      title: 'Test Note',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dignissim feugiat feugiat. Cras tempor dapibus ipsum. Quisque.',
    },
    {
      id: 2,
      title: 'Test 2',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
    },
    {
      id: 3,
      title: 'Test 3',
      body: 'Render videos of eibra',
    },
    {
      id: 4,
      title: 'Test 4',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et nulla tempor, rhoncus purus laoreet, fermentum enim. Vestibulum tempor vulputate consectetur. Aliquam suscipit, odio id aliquet pulvinar, est felis consectetur.',
    },
  ],
}

export const NotesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, { payload }: PayloadAction<Note>) => {
      state.notes.push(payload)
    },
    deleteNote: (state, { payload }: PayloadAction<number>) => {
      state.notes = state.notes.filter((note) => note.id !== payload)
    },
  },
})

export const { addNote, deleteNote } = NotesSlice.actions

export default NotesSlice.reducer
