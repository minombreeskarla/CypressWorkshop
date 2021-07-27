
// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('My First Cypress Test', function() {
    it('Visits the ToolsQA Demo Page and check the menu items', function() {
        //Visit the Demo QA Website
        cy.visit("http://demoqa.com/");
        // Clicking on Widget Menu Item 
        //cy.get('#menu-top > li:nth-child(3) > a').click();
        cy.get('#app >* div:nth-child(4) > div > div.card-body > h5').click();
        //Verify number of items present on Widget Tab
        //cy.get('.demo-rame > ul > li').should('have.length',19);
        cy.get('div.element-group > div > ul.menu-list > li.btn.btn-light').should('have.length',27);
        cy.get('.main-header').should('have.contain.text',"Widgets");
    })
})
