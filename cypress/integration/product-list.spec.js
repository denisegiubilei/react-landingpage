/// <reference types="cypress" />

import {
  currencyToNumber,
} from '../support/utils/formatNumber';

context('Product section', () => {
  beforeEach(() => {
    cy.visit('http://react-landingpage-dg.herokuapp.com/');
  });

  it('should render product section', () => {
    cy.get('[data-testid=product-section]').should('be.visible');
  });

  it('should render product section title', () => {
    cy.get('[data-testid=product-section-title]').should('contain.text', 'Aproveite as melhores ofertas!');
  });

  it('should render laoder before products load', () => {
    cy.get('[data-testid=loader]').should('be.visible');

    cy.intercept(/^https:\/\/fakestoreapi.com\/products$/).as('products');
    cy.wait('@products').its('response.statusCode').should('eq', 200);
    
    cy.get('[data-testid=loader]').should('not.exist');
    
  });

  it('should render first page of products', () => {
    cy.intercept(/^https:\/\/fakestoreapi.com\/products$/).as('products');
    cy.wait('@products').its('response.statusCode').should('eq', 200);

    cy.get('@products').then(({ response }) => {
      response.body.slice(0, 15).forEach((product) => {
        cy.get(`.product-list > [data-testid=product-${product.id}]`).should('be.visible');
      });
      cy.get(`.product-list > [data-testid=product-${response.body[16].id}]`).should('not.exist');
    });
  });

  it('should load more products after click on load more button', () => {
    cy.intercept(/^https:\/\/fakestoreapi.com\/products$/).as('products');
    cy.wait('@products').its('response.statusCode').should('eq', 200);

    cy.get('[data-testid=product-section] > [data-testid=btn-load-more-products]').click();

    cy.get('@products').then(({ response }) => {
      response.body.slice(0, 30).forEach((product) => {
        cy.get(`.product-list > [data-testid=product-${product.id}]`).should('be.visible');
      });
    });
  });

  it('should sort by ASC price', () => {
    cy.get('[data-testid=select-orderby]').select('priceAsc');

    cy.get('.product-list > article [data-testid=product-price]:first').invoke('text').then((firstPrice) => {
      cy.get('.product-list > article [data-testid=product-price]:last').invoke('text').then((lastPrice) => {
        expect(currencyToNumber(lastPrice)).to.be.greaterThan(currencyToNumber(firstPrice));
      });
    });
  });

  it('should sort by DESC price', () => {
    cy.get('#orderby').select('priceDesc');

    cy.get('.product-list > article [data-testid=product-price]:first').invoke('text').then((firstPrice) => {
      cy.get('.product-list > article [data-testid=product-price]:last').invoke('text').then((lastPrice) => {
        expect(currencyToNumber(lastPrice)).to.be.lessThan(currencyToNumber(firstPrice));
      });
    });
  });

  it('should open product quickview after click on product card', () => {
    cy.get('.product-list > article:first').click();
    cy.get('.product-list > article:first').invoke('attr', 'id').then((productId) => {
      cy.get(`[data-testid=quickview-product-${productId}`).should('be.visible');
    })
  });
});
