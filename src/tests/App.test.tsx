import { cleanup, render } from '@testing-library/react'
import { afterEach, describe, it } from 'vitest'
import { screen } from './utils'
import NotesApp from '../NotesApp'

describe('App', () => {
    afterEach(cleanup)

    it('should render App', (): void => {
        render(<NotesApp />)
        screen.queryAllByText(/Vite/i)
    })
})
