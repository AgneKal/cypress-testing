/// <reference types = "cypress" />

describe('Remove Products From Cart', () => {
    it('should remove products from cart', () => {
        // 1-3. Launch browser, navigate to url 'http://automationexercise.com', verify that home page is visible successfully:
        cy.launchBrowserNavigateHome();

        // 4. Add products to cart
        cy.get('.choose > ul.nav > li > a').first().click();
        cy.get('button.cart').click();
        cy.get('.modal-footer > .btn').contains('Continue Shopping').click();

        // 5. Click 'Cart' button
        cy.get('.nav').contains('Cart').click();

        // 6. Verify that cart page is displayed
        cy.url().should('include', '/view_cart');

        // 7. Click 'X' button corresponding to particular product
        cy.get('td > a.cart_quantity_delete').click();

        // 8. Verify that product is removed from the cart
        cy.get('#empty_cart').should('contain.text', 'Cart is empty!');
    });
});