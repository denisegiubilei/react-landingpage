/// <reference types="cypress" />

context('Newsletter form', () => {
  beforeEach(() => {
    cy.visit('http://react-landingpage-dg.herokuapp.com/');
  });

  it('should render title and subtitle', () => {
    cy.get('[data-testid=newsletter-section] > .title').should('contain.text', 'Receba nossas ofertas em primeira mão');
    cy.get('[data-testid=newsletter-section] > p').should('contain.text', 'Cadastre-se e fique por dentro das novidades ;)');
  });

  it('should submit and return feedback to user', () => {
    cy.get('#name').type('name');
    cy.get('#email').type('test@email.com');
    cy.get('[data-testid=btn-submit-newsletter]').click();

    cy.get('[data-testid=btn-submit-newsletter]').should('contain.value', 'Salvando...');

    cy.wait(2000);

    cy.get('[data-testid=btn-submit-newsletter]').should('contain.value', 'Usuário salvo! :)');
  });

  it('should not permit submitting if name is not filled', () => {
    cy.get('#email').type('test@email.com');
    cy.get('[data-testid=btn-submit-newsletter]').click();

    cy.get('[data-testid=btn-submit-newsletter]').should('contain.value', 'Enviar agora');

    cy.wait(2000);

    cy.get('[data-testid=btn-submit-newsletter]').should('contain.value', 'Enviar agora');
  });

  it('should not permit submitting if e-mail is not filled', () => {
    cy.get('#name').type('name');
    cy.get('[data-testid=btn-submit-newsletter]').click();

    cy.get('[data-testid=btn-submit-newsletter]').should('contain.value', 'Enviar agora');

    cy.wait(2000);

    cy.get('[data-testid=btn-submit-newsletter]').should('contain.value', 'Enviar agora');
  });

  it('should not permit submitting if e-mail is invalid', () => {
    cy.get('#name').type('name');
    cy.get('#email').type('email');
    cy.get('[data-testid=btn-submit-newsletter]').click();

    cy.get('[data-testid=btn-submit-newsletter]').should('contain.value', 'Enviar agora');

    cy.wait(2000);

    cy.get('[data-testid=btn-submit-newsletter]').should('contain.value', 'Enviar agora');
  });
});
