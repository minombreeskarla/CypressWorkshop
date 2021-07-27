
// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('My Second Cypress Test', function() {
    it('Visits the ToolsQA Demo Page and check the Interactive menu items', function() {
        //Visit the Demo QA Website
        cy.visit("http://demoqa.com/");
        // Clicking on Widget Menu Item 
        //cy.get('#menu-top > li:nth-child(3) > a').click();


        

        cy.get('#app >* div:nth-child(4) > div > div.card-body > h5').click();
        //Verify number of items present on Widget Tab
        //cy.get('.demo-rame > ul > li').should('have.length',19);
        cy.get('div.element-group > div > ul.menu-list > li.btn.btn-light').should('be.visible').and('have.length',27);

        //The get() method gets one or more elements based on the selector passed as a parameter. 
        //cy.get('input'{log:false}).should('be.disabled');
        //cy.get('button').should('be.visible');
        
        //cy.get() will automatically retry (default Cypress Timeout) until the element you are searching exists in DOM or until assertions you’ve chained all pass. To override
        //cy.get('input',{ timeout: 1000 }) // It will wait for 1000ms before timing out
       
        //Specifies from where element search should start. Additionally, null specifies that Cypress will start searching element from the root element.
       // cy.get('input',{ withinSubject : document.querySelector('#menu-top')}) // uses jQuery Selector
        //cy.get('input',{ withinSubject : document.getElementById('#menu-top')}) // uses HTML Selector


        //Eq method helps us in getting a DOM element at a specific index in an array of elements.
        //cy.get('input').eq(1).should('contain', 'Cucumber')

        //So, in actual, the callback function within the “.within” block is invoked after the cy.get(‘#searchBox’) function and restricts the scope of the commands inside the callback function to the scope returned by the parent get command.
        //cy.get('#searchBox').within(() => {
        //cy.get('input').type('Cucumber') // Only searches inputs within searchBox
        //})


        //the cy.get(‘#parent’) will do a search for the parent element only, and inside the parent web element, it will search for tags starting with “li” and will return two web elements.
        //Get and Find Command (Parent - Child Relationship)
        // cy.get('#parent').find('li');
        //cy.get('.demo-frame > ul > li').should('have.length',19);
        //cy.get('.demo-frame > ul > li').find('[href*=keyboard]').should('have.length',2);

        //So if there will be any JavaScript commands in the tests, they will not wait for the Cypress commands to complete their tasks and will continue their execution.
       
        // cy.get('.category-cards').find('.card').should('have.length',5);

        cy.get('div.element-group > div > ul.menu-list').find('li.btn.btn-light').should('be.exist').and('have.length',27).then(() => {
            console.log('ASYNCHRONOUS.... Using Mocha Log ')
        })

       cy.log('Using Cypress Log');

        })


})
