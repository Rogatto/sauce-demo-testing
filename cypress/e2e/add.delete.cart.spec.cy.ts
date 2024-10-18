import * as allure from "allure-js-commons"

describe('Add and delete items from the cart', () => {

  beforeEach(() => {
    allure.epic("SauceLabs Ecommerce")
    allure.feature("Cart Management")
    cy.visit('/')
    cy.login(Cypress.env('USERNAME'),Cypress.env('PASSWORD'))
  })

  it('Verify adding new item to the cart', () => {
    allure.story("Add product to the cart")
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
  })

  it('Verify delete item to the cart', () => {
    allure.story("Delete product to the cart")
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
  })
})