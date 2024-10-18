import messages from "../fixtures/messages.json"
import * as allure from "allure-js-commons"

describe('Verifies login and logout funcionalities', () => {

  beforeEach(() => {
    allure.epic("SauceLabs Ecommerce")
    allure.feature("Authentication")
  })

  it('User is logged in successfuly', () => {
    allure.story("Login")
    cy.visit('/')
    cy.login(Cypress.env('USERNAME'),Cypress.env('PASSWORD'))
    cy.get('[data-test="inventory-container"]').should('be.visible')
  })

  it('Verifies locked_out_user', () => {
    allure.story("Login")
    cy.visit('/')
    cy.login('locked_out_user','secret_sauce')
    cy.get('[data-test="error"]').contains(messages.lockedOutUserError)
  })

  // what we can do here?? :)
  it('Verifies problem_user', () => {
    allure.story("Login")
    cy.visit('/')
    cy.login('problem_user','secret_sauce')
    //cy.get('[data-test="error"]').contains('Epic sadface: Sorry, this user has been locked out.')
  })

  // How to verify this?
  it('Verifies error_user', () => {
    allure.story("Login")
    cy.visit('/')
    cy.login('error_user','secret_sauce')
    //cy.get('[data-test="error"]').contains('Epic sadface: Sorry, this user has been locked out.')
  })

  // How to verify this?
  it('Verifies visual_user', () => {
    allure.story("Login")
    cy.visit('/')
    cy.login('visual_user','secret_sauce')
    //cy.get('[data-test="error"]').contains('Epic sadface: Sorry, this user has been locked out.')
  })

  // How to verify this?
  it('Verifies performance_glitch_user', () => {
    allure.story("Login")
    cy.visit('/')
    cy.login('performance_glitch_user','secret_sauce')
    //cy.get('[data-test="error"]').contains('Epic sadface: Sorry, this user has been locked out.')
  })

  it('Verifies if user can direct access inventory page', () => {
    allure.story("Login")
    cy.visit('/inventory.html', {failOnStatusCode: false})
    cy.get('[data-test="error"]').contains(messages.loggedInError)
  })

  it('Verifies if user logged in is able to perform the logout from the application', () => {
    allure.story("Logout")
    cy.visit('/')
    cy.login(Cypress.env('USERNAME'),Cypress.env('PASSWORD'))
    cy.logout()
    cy.get('[data-test="login-button"]').should('be.visible')
  })

})