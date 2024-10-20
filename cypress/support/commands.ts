import { ContentType } from "allure-js-commons"
import * as allure from "allure-js-commons"

declare global {
    namespace Cypress {
      interface Chainable {
        login(email: string, password: string): void
        logout(): void
        addProductsToCartRandomly(): void
        addSpecifiedProductToCart(productName: string): void
        fillOutCheckoutInformation(firstName: string, lastName: string, postalCode: string): void
        allureAttachment(pathScreenshot: string): void
      }
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

Cypress.Commands.add('addProductsToCartRandomly', () => { 
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
})

Cypress.Commands.add('addSpecifiedProductToCart', (productName) => { 
    cy.get('[data-test="inventory-item"]').contains(productName).click()
    cy.get('[data-test="add-to-cart"]').click()
})

Cypress.Commands.add('fillOutCheckoutInformation', (firstName, lastName, postalCode) => { 
    cy.get('[data-test="firstName"]').type(firstName)
    cy.get('[data-test="lastName"]').type(lastName)
    cy.get('[data-test="postalCode"]').type(postalCode)
})

Cypress.Commands.add('allureAttachment', (pathToScreenShoot) => { 
    allure.attachmentPath("Screenshot", pathToScreenShoot, {
        contentType: ContentType.PNG,
        fileExtension: "png"
    })
})