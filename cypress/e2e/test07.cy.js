/// <reference types = "cypress" />

describe('Verify Product quantity in Cart', () => {
    it('should display correct products quantity', () => {
        // 1-3. Launch browser, navigate to url 'http://automationexercise.com', verify that home page is visible successfully:
        cy.launchBrowserNavigateHome();

        // 4. Click 'View Product' for any product on home page
        // 5. Verify product detail is opened
        // 6. Increase quantity to 4
        // 7. Click 'Add to cart' button
        // 8. Click 'View Cart' button
        // 9. Verify that product is displayed in cart page with exact quantity
    });
});