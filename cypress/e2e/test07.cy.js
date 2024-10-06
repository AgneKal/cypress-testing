/// <reference types = "cypress" />

describe('Verify Product quantity in Cart', () => {
    it('should display correct products quantity', () => {
        const quantity = 4;

        // 1-3. Launch browser, navigate to url 'http://automationexercise.com', verify that home page is visible successfully:
        cy.launchBrowserNavigateHome();

        // 4. Click 'View Product' for any product on home page
        cy.get('.choose > ul.nav > li > a').first().click();

        // 5. Verify product detail is opened
        cy.url().should('include', '/product_details/');

        // 6. Increase quantity to 4
        cy.get('input[name="quantity"]').clear().type(quantity);

        // 7. Click 'Add to cart' button
        cy.get('button.cart').click();

        // 8. Click 'View Cart' button
        cy.get('u').contains('View Cart').click();

        // 9. Verify that product is displayed in cart page with exact quantity
        cy.get('.cart_quantity').eq(0).should('contains.text', '4');
    });
});