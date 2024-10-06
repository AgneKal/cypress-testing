/// <reference types = "cypress" />

describe('Verify Subscription in home page', () => {
    it('should successful submit email for subscription in home page', () => {
        // 1. Launch browser
        cy.visit('/');
        // 2. Navigate to url 'http://automationexercise.com'
        // 3. Verify that home page is visible successfully
        // 4. Scroll down to footer
        // 5. Verify text 'SUBSCRIPTION'
        // 6. Enter email address in input and click arrow button
        // 7. Verify success message 'You have been successfully subscribed!' is visible
    });
});