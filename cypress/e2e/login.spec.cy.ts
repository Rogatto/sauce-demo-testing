describe('Verifies login', () => {

  it('User is logged in successfuly', () => {
    cy.visit('/')
    cy.login(Cypress.env('USERNAME'),Cypress.env('PASSWORD'))
  })

  it('Verifies locked_out_user', () => {
    cy.visit('/')
    cy.login('locked_out_user','secret_sauce')
    cy.get('[data-test="error"]').contains('Epic sadface: Sorry, this user has been locked out.')
  })

  // what we can do here?? :)
  it('Verifies problem_user', () => {
    cy.visit('/')
    cy.login('problem_user','secret_sauce')
    //cy.get('[data-test="error"]').contains('Epic sadface: Sorry, this user has been locked out.')
  })

  // How to verify this?
  it('Verifies error_user', () => {
    cy.visit('/')
    cy.login('error_user','secret_sauce')
    //cy.get('[data-test="error"]').contains('Epic sadface: Sorry, this user has been locked out.')
  })

  // How to verify this?
  it('Verifies visual_user', () => {
    cy.visit('/')
    cy.login('visual_user','secret_sauce')
    //cy.get('[data-test="error"]').contains('Epic sadface: Sorry, this user has been locked out.')
  })

  // How to verify this?
  it('Verifies performance_glitch_user', () => {
    cy.visit('/')
    cy.login('performance_glitch_user','secret_sauce')
    //cy.get('[data-test="error"]').contains('Epic sadface: Sorry, this user has been locked out.')
  })

})