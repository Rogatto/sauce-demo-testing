import * as allure from "allure-js-commons"
import { ContentType } from "allure-js-commons"
const pathScreenshots = "cypress/screenshots/add.delete.cart.spec.cy.ts/"

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

    // Getting product name
    cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]')      .invoke('text')
      .then((text) => {
        const productName = text.trim()
        cy.wrap(productName).as('productName')
    })

    // Getting price on the cart for the product
    cy.get(':nth-child(1) > [data-test="inventory-item-description"] > .pricebar > [data-test="inventory-item-price"]')
      .invoke('text')
      .then((text) => {
        const productPrice = text.trim()
        cy.wrap(productPrice).as('productPrice')
    })

    cy.get('[data-test="shopping-cart-link"]').click()

    //Verifies if cart has correct product information on shopping cart
    cy.get('@productPrice').then((price) => {
      cy.get('@productName').then((productName) => {
          cy.get('[data-test="inventory-item-price"]').contains(price.toString())
          cy.get('[data-test="inventory-item-name"]').contains(productName.toString())
      })
    })

    const addingProductEvidence = 'add-product-evidence'
    cy.screenshot(addingProductEvidence)
    allure.attachmentPath("Screenshot", `${pathScreenshots}${addingProductEvidence}.png`, {
      contentType: ContentType.PNG,
      fileExtension: "png"
    })
  })

  it('Verify delete item to the cart', () => {

    allure.story("Delete product to the cart")
    //cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.addSpecifiedProductToCart('Sauce Labs Backpack')
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="remove-sauce-labs-backpack"]').click()

    cy.get('.removed_cart_item').should('exist')
    cy.get('[data-test="inventory-item"]').should('not.exist')

    const addingProductEvidence = 'delete-product-evidence'
    cy.screenshot(addingProductEvidence)
    allure.attachmentPath("Screenshot", `${pathScreenshots}${addingProductEvidence}.png`, {
      contentType: ContentType.PNG,
      fileExtension: "png"
    })
  })
})