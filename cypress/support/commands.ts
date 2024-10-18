declare namespace Cypress {
    interface Chainable {
      login(email: string, password: string): void
      logout(): void;
    }
}

Cypress.Commands.add('login', (email, password) => { 
    cy.get('[data-test="username"]').type(email)
    cy.get('[data-test="password"]').type(password)
    cy.get('[data-test="login-button"]').click()
})

Cypress.Commands.add('logout', () => { 
    cy.get('#react-burger-menu-btn').click()
    cy.get('[data-test="logout-sidebar-link"]').click()
})