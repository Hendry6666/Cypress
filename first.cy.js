/// <reference types="cypress" />

describe('My First Test', () => {
    it('clicks the link "type"', () => {
      cy.visit('https://example.cypress.io')
      cy.get('h1').contains('Kitchen Sink')
      cy.contains('get').click()
      cy.url().should('include','/commands/querying')
    })
  })