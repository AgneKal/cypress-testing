/// <reference types = "cypress" />

describe('Login User with correct email and password', () => {
    it('should login user', () => {
        // 1-3. Launch browser, navigate to url 'http://automationexercise.com', verify that home page is visible successfully:
        cy.launchBrowserNavigateHome();

        // 4. Click on 'Signup / Login' button
        cy.get('.nav').contains('Signup / Login').click();

        // 5. Verify 'Login to your account' is visible
        cy.get('.login-form > h2').should('have.text', 'Login to your account').and('be.visible');

        cy.fixture('user').then((fakeUser) => {
            const { username, email, password } = fakeUser.user;

            // 6. Enter correct email address and password
            // 7. Click 'login' button
            cy.loginOrRegisterAndLoginUser(username, email, password);

            // 8. Verify that 'Logged in as username' is visible
            cy.get('li > a').should('be.visible').and('contain.text', `Logged in as ${username}`);
        });

        // 9. Click 'Delete Account' button
        cy.get('.nav').contains('Delete Account').click();

        // 10. Verify that 'ACCOUNT DELETED!' is visible
        cy.get('h2[data-qa="account-deleted"]').should('be.visible').and('have.text', 'Account Deleted!');
    });
});