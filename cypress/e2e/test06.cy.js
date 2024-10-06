/// <reference types = "cypress" />

describe('Add Products in Cart', () => {
    it('should add product in cart with right prices, quantity and total price', () => {
        // 1-3. Launch browser, navigate to url 'http://automationexercise.com', verify that home page is visible successfully:
        cy.launchBrowserNavigateHome();

        // 4. Click 'Products' button
        cy.get('.nav > li > a').contains('Products').click();

        // 5. Hover over first product and click 'Add to cart'
        cy.get('.productinfo .add-to-cart[data-product-id="1"]').click();

        // 6. Click 'Continue Shopping' button
        cy.get('.modal-footer > .btn').contains('Continue Shopping').click();

        // 7. Hover over second product and click 'Add to cart'
        cy.get('.productinfo .add-to-cart[data-product-id="2"]').click();

        // 8. Click 'View Cart' button
        cy.get('u').contains('View Cart').click();

        // 9. Verify both products are added to Cart
        cy.get('#cart_info_table tbody tr').should('have.length', 2);

        // 10. Verify their prices, quantity and total price
        cy.get('.cart_price').eq(0).should('contains.text', 'Rs. 500');
        cy.get('.cart_quantity').eq(0).should('contains.text', '1');
        cy.get('.cart_total').eq(0).should('contains.text', 'Rs. 500');
        cy.get('.cart_price').eq(1).should('contains.text', 'Rs. 400');
        cy.get('.cart_quantity').eq(1).should('contains.text', '1');
        cy.get('.cart_total').eq(1).should('contains.text', 'Rs. 400');
    });
});