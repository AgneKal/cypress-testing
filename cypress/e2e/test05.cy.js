/// <reference types = "cypress" />

describe('Verify Subscription in home page', () => {
    it('should successful submit email for subscription in home page', () => {
        // 1-3. Launch browser, navigate to url 'http://automationexercise.com', verify that home page is visible successfully:
        cy.launchBrowserNavigateHome();

        // 4. Scroll down to footer
        cy.scrollTo('bottom');

        // 5. Verify text 'SUBSCRIPTION'
        cy.get('footer h2').should('have.text', 'Subscription');

        // 6. Enter email address in input and click arrow button
        cy.get('footer input[type="email"]').type('dumbemail@email.com');
        cy.get('button[type="submit"]').click();

        // 7. Verify success message 'You have been successfully subscribed!' is visible
        cy.get('footer #success-subscribe').should('be.visible');
    });
});