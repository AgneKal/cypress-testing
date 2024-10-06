/// <reference types = "cypress" />

describe('Verify All Products and product detail page', () => {
    it('should load product detail page', () => {
        // 1-3. Launch browser, navigate to url 'http://automationexercise.com', verify that home page is visible successfully:
        cy.launchBrowserNavigateHome();

        // 4. Click on 'Products' button
        cy.get('.nav > li > a').contains('Products').click();

        // 5. Verify user is navigated to ALL PRODUCTS page successfully
        cy.get('.features_items > h2').contains('All Products').should('be.visible');
        cy.url().should('include', '/products');

        // 6. The products list is visible
        cy.get('.features_items').should('be.visible');
        cy.get('.features_items').find('.col-sm-4').should('have.length.greaterThan', 0);

        // 7. Click on 'View Product' of first product
        cy.get('.choose > ul.nav > li > a').first().click();

        // 8. User is landed to product detail page
        cy.url().should('include', '/product_details/1');

        // 9. Verify that detail detail is visible: product name, category, price, availability, condition, brand
        cy.get('.product-information').within(() => {
            cy.get('h2').should('be.visible');
            cy.get('p').contains('Category').should('be.visible');
            cy.get('span').contains('Rs').should('be.visible');
            cy.get('p').contains('Availability').should('be.visible');
            cy.get('p').contains('Condition').should('be.visible');
            cy.get('p').contains('Brand').should('be.visible');
        });
    });
});