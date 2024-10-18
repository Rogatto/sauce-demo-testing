import messages from "../fixtures/messages.json"
import * as allure from "allure-js-commons"

describe('Checkout the new cart', () => {
  
  beforeEach(() => {
    allure.epic("SauceLabs Ecommerce")
    allure.feature("Checkout Page")
    cy.visit('/')
    cy.login(Cypress.env('USERNAME'),Cypress.env('PASSWORD'))
  })

  it('Add product to the cart and checkout it', () => {
    allure.story("Checkout a new cart")
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()

    // Getting price on the cart for product 1
    cy.get(':nth-child(3) > .cart_item_label > .item_pricebar > [data-test="inventory-item-price"]') // Replace with your actual selector
      .invoke('text')
      .then((text) => {
        const productPrice1 = text.trim()
        cy.wrap(productPrice1).as('productPrice1')
    });

    // Getting price on the cart for product 2
    cy.get(':nth-child(4) > .cart_item_label > .item_pricebar > [data-test="inventory-item-price"]') // Replace with your actual selector
      .invoke('text')
      .then((text) => {
        const productPrice2 = text.trim()
        cy.wrap(productPrice2).as('productPrice2')
    });

    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="firstName"]').type('text')
    cy.get('[data-test="lastName"]').type('text')
    cy.get('[data-test="postalCode"]').type('123')

    cy.get('[data-test="continue"]').click()

    //verifies product price 1
    cy.get('@productPrice1').then((price) => {
      cy.get(':nth-child(3) > .cart_item_label > .item_pricebar > [data-test="inventory-item-price"]')
      .should('contain.text', price)
    })

    //verifies product price 2
    cy.get('@productPrice2').then((price) => {
      cy.get(':nth-child(4) > .cart_item_label > .item_pricebar > [data-test="inventory-item-price"]')
      .should('contain.text', price)
    })

    cy.get('[data-test="tax-label"]') // Replace with your actual selector
      .invoke('text')
      .then((text) => {
        const tax = text.trim()
        cy.wrap(tax).as('tax')
    });

    //Verifies sub and total amount of the cart plus vat
    cy.get('@productPrice1').then((price1) => {
      cy.get('@productPrice2').then((price2) => {
        cy.get('@tax').then((tax) => {

          const priceProduct1 = Number(price1.toString().replace('$', ''))
          const priceProduct2 = Number(price2.toString().replace('$', ''))
          const taxValue = Number(tax.toString().replace('Tax: $', ''))

          const subTotal = priceProduct1 + priceProduct2
          const totalWithTax = priceProduct1 + priceProduct2 + taxValue

          cy.get('[data-test="subtotal-label"]').contains(subTotal)
          cy.get('[data-test="total-label"]').contains(totalWithTax)

        })
      })
    })

    cy.get('[data-test="finish"]').click()

    cy.get('[data-test="complete-header"]').contains(messages.sucessfulPurchase)
    cy.get('[data-test="complete-text"]').contains(messages.orderDispatched)
  })

})