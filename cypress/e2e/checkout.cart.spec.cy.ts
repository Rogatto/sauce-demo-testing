describe('Checkout the cart', () => {
  before(() => {
    cy.visit('/')
    cy.login(Cypress.env('USERNAME'),Cypress.env('PASSWORD'))
  })
  it('Checkout the cart', () => {
    cy.log('I run before every test in every spec file!!!!!!')
  })
})