describe('template spec', () => {
  before(() => {
    cy.visit('/')
    cy.login(Cypress.env('USERNAME'),Cypress.env('PASSWORD'))
  })
  it('passes', () => {
    cy.log('I run before every test in every spec file!!!!!!')
  })
})