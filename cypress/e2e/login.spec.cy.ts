import messages from "../fixtures/messages.json"
import users from "../fixtures/users.json"
import * as allure from "allure-js-commons"
const pathScreenshots = "cypress/screenshots/login.spec.cy.ts/"

describe('Verifies login and logout funcionalities', () => {

  beforeEach(() => {
    allure.epic("SauceLabs Ecommerce")
    allure.feature("Authentication")
  })

  it('User is logged in successfuly', () => {
    allure.story("Login")
    cy.visit('/')
    cy.login(Cypress.env('USERNAME'), Cypress.env('PASSWORD'))
    cy.get('[data-test="inventory-container"]').should('be.visible')

    cy.screenshot(Cypress.env('USERNAME'))
    cy.allureAttachment(`${pathScreenshots}${Cypress.env('USERNAME')}.png`)
  })

  it('Verifies locked_out_user', () => {
    allure.story("Login")
    cy.visit('/')
    cy.login(users.lockedOutUser, Cypress.env('PASSWORD'))
    cy.get('[data-test="error"]').contains(messages.lockedOutUserError)

    cy.screenshot(users.lockedOutUser)
    cy.allureAttachment(`${pathScreenshots}${users.lockedOutUser}.png`)
  })

  //We can improve this test by adding visual testing regression
  it('Verifies user which contains problem on cart page', () => {
    allure.story("Login")
    allure.issue('5')
    cy.visit('/')
    cy.login(users.problemUser, Cypress.env('PASSWORD'))

    //Verifies if image from a product has the right imahe
    cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]').should('have.attr', 'src').should('include','/static/media/sauce-backpack-1200x1500.0a0b85a3.jpg')

    const productImageError = 'product-image-error'
    cy.screenshot(productImageError)
    cy.allureAttachment(`${pathScreenshots}${productImageError}.png`)
  })

  it('Verifies if user can direct access inventory page', () => {
    allure.story("Login")
    cy.visit('/inventory.html', {failOnStatusCode: false})
    cy.get('[data-test="error"]').contains(messages.loggedInError)

    const directAccessScreenShot = 'login-error-direct-access'
    cy.screenshot(directAccessScreenShot)
    cy.allureAttachment(`${pathScreenshots}${directAccessScreenShot}.png`)
  })

  it('Verifies if user logged in is able to perform the logout from the application', () => {
    allure.story("Logout")
    cy.visit('/')
    cy.login(Cypress.env('USERNAME'),Cypress.env('PASSWORD'))
    cy.logout()
    cy.get('[data-test="login-button"]').should('be.visible')

    const logoutScreenShot = 'logout-screen-shot'
    cy.screenshot(logoutScreenShot)
    cy.allureAttachment(`${pathScreenshots}${logoutScreenShot}.png`)
  })
})