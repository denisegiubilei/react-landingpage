/// <reference types="cypress" />

context('Landing page basic rendering', () => {
  beforeEach(() => {
    cy.visit('http://react-landingpage-dg.herokuapp.com/');
  });

  it('should render h1 title', () => {
    cy.get('.header').should('be.visible');
  });

  it('should render product section', () => {
    cy.get('[data-testid=product-section]').should('be.visible');
  });

  it('should render widgets section with product carousels', () => {
    cy.get('[data-testid=widgets-section]').should('be.visible');
    cy.get('[data-testid=product-carousel]').should('have.length', 2);
  });

  it('should render newsletter section with form', () => {
    cy.get('[data-testid=newsletter-section] > #newsletter-form').should('be.visible');
  });

  it('should render footer', () => {
    cy.get('.footer ').should('be.visible');
  });
});
