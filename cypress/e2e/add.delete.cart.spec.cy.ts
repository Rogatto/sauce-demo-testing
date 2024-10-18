describe('Add and delete items from the cart', () => {
  before(() => {
    cy.visit('/')
    cy.login(Cypress.env('USERNAME'),Cypress.env('PASSWORD'))
  })

  it('Verify adding item to the cart', () => {
    cy.visit('/')
    cy.log('I run before every test in every spec file!!!!!!')
  })

  it('Verify deleting item from the cart', () => {
    cy.visit('/')
    cy.log('I run before every test in every spec file!!!!!!')
  })

  it('Verify adding item to the cart with user who is gonna contains errors', () => {
    cy.visit('/')
    cy.log('I run before every test in every spec file!!!!!!')
  })

  it('Verify deleting item from the cart with user who is gonna contains errors', () => {
    cy.visit('/')
    cy.log('I run before every test in every spec file!!!!!!')
  })
})