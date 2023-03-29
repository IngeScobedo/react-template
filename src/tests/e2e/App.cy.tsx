import App from '../../App';

describe('App', () => {
  it('should render and Vite text exists', () => {
    cy.mount(<App />);
    cy.contains('Vite')
  });
});