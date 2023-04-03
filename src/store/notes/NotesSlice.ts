import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AddNoteInputs } from '../../notes/interfaces'
import { NotesState } from '../interfaces'

const initialState: NotesState = {
  notes: [
    {
      id: 1,
      title: 'Test Note',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 2,
      title: 'Test 2',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 3,
      title: 'Test 3',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: 4,
      title: 'Test 4',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 5,
      title: 'test 5',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: 6,
      title: 'Test 6',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 7,
      title: 'Test 7',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ],
  editingNote: null,
}

export const NotesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, { payload }: PayloadAction<AddNoteInputs>) => {
      state.notes.push({ id: new Date().getTime(), ...payload })
    },
    deleteNote: (state, { payload }: PayloadAction<number>) => {
      state.notes = state.notes.filter((note) => note.id !== payload)
    },
    setNoteToEdit: (state, { payload }: PayloadAction<number | null>) => {
      const note = state.notes.filter((note) => note.id === payload)[0]
      console.log(note, payload, state.notes)
      state.editingNote = note
    },
    editNote: (state, { payload }: PayloadAction<AddNoteInputs>) => {
      const { editingNote } = state

      if (editingNote) {
        state.notes = state.notes.map((note) => {
          if (note.id === editingNote.id) {
            return { id: editingNote.id, ...payload }
          }
          return note
        })
        state.editingNote = null
      }
    },
  },
})

export const { addNote, deleteNote, setNoteToEdit, editNote } =
  NotesSlice.actions

export default NotesSlice.reducer
