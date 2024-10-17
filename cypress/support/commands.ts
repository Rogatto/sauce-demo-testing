
Cypress.Commands.add('login', (email, password) => { 
    cy.get('[data-test="username"]').type(email)
    cy.get('[data-test="password"]').type(password)
    cy.get('[data-test="login-button"]').click()
 })