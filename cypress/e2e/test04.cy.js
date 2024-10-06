/// <reference types = "cypress" />

describe('Verify All Products and product detail page', () => {
    it('should load product detail page', () => {
        // 1-3. Launch browser, navigate to url 'http://automationexercise.com', verify that home page is visible successfully:
        cy.launchBrowserNavigateHome();

        // 4. Click on 'Products' button
        // 5. Verify user is navigated to ALL PRODUCTS page successfully
        // 6. The products list is visible
        // 7. Click on 'View Product' of first product
        // 8. User is landed to product detail page
        // 9. Verify that detail detail is visible: product name, category, price, availability, condition, brand
    });
});