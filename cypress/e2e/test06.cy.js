/// <reference types = "cypress" />

describe('Add Products in Cart', () => {
    it('should add product in cart with right prices, quantity and total price', () => {
        // 1-3. Launch browser, navigate to url 'http://automationexercise.com', verify that home page is visible successfully:
        cy.launchBrowserNavigateHome();

        // 4. Click 'Products' button
        // 5. Hover over first product and click 'Add to cart'
        // 6. Click 'Continue Shopping' button
        // 7. Hover over second product and click 'Add to cart'
        // 8. Click 'View Cart' button
        // 9. Verify both products are added to Cart
        // 10. Verify their prices, quantity and total price
    });
});