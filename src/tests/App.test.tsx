import { cleanup, render } from '@testing-library/react'
import { afterEach, describe, it } from 'vitest'
import { screen } from './utils'
import App from '../App'

describe('App', () => {
    afterEach(cleanup)

    it('should render App', (): void => {
        render(<App />)
        screen.queryAllByText(/Vite/i)
    })
})
