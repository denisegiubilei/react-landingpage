/// <reference types="cypress" />

context('Widgets section', () => {
  beforeEach(() => {
    cy.visit('http://react-landingpage-dg.herokuapp.com/');
  });

  it('should load electronics products carousel', () => {
    cy.intercept('https://fakestoreapi.com/products/category/electronics').as('electronics');
    cy.wait('@electronics').its('response.statusCode').should('eq', 200);

    cy.get('[data-testid=widgets-section] > :nth-child(1) > h2').should('contain.text', 'Eletrônicos selecionados para você!');

    cy.get('@electronics').then(({ response }) => {
      response.body.slice(0, 4).forEach((product) => {
        cy.get(`[data-index="0"] > [data-testid=product-${product.id}`).should('not.be.null');
      });
    });
  });

  it('should load women clothes products carousel', () => {
    cy.intercept('https://fakestoreapi.com/products/category/women%20clothing').as('womenClothing');
    cy.wait('@womenClothing').its('response.statusCode').should('eq', 200);

    cy.get('[data-testid=widgets-section] > :nth-child(2) > h2').should('contain.text', 'Escolha o presente que cabe no seu bolso :)');

    cy.get('@womenClothing').then(({ response }) => {
      response.body.slice(0, 4).forEach((product) => {
        cy.get(`[data-index="1"] > [data-testid=product-${product.id}`).should('not.be.null');
      });
    });
  });

  it('should handle arrow click on electronics products carousel', () => {
    cy.get(':nth-child(1) > .react-multi-carousel-list > .react-multiple-carousel__arrow').click();
  });

  it('should handle arrow click on women clothes products carousel', () => {
    cy.get(':nth-child(2) > .react-multi-carousel-list > .react-multiple-carousel__arrow').click();
  });
});
