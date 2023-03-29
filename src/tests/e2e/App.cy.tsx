import NotesApp from '../../NotesApp'

describe('App', () => {
  it('should render and Vite text exists', () => {
    cy.mount(<NotesApp />)
    cy.contains('Vite')
  })
})
